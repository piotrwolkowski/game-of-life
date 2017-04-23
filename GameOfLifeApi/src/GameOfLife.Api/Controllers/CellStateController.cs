using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using GameOfLife.Api.Services;
using Newtonsoft.Json;

namespace GameOfLifeApi.Controllers
{
    [Route("api/[controller]")]
    public class CellStateController : Controller
    {
        [HttpGet("rand/{size}")]
        public JsonResult GetRandom(int size)
        {
            return Json(CellStateService.GetRandomStep(size));
        }
        
        [HttpGet("next/{array}")]
        public JsonResult GetNextStep(string array)
        {
            var input = JsonConvert.DeserializeObject<int[,]>(array);            
            return Json(CellStateService.GetNextStep(input));
        }

        [HttpPost("next")]
        public JsonResult PostNextStep([FromBody] int[,] array)
        {
            return Json(CellStateService.GetNextStep(array));
        }
    }
}
