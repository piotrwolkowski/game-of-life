using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameOfLife.Api.Services
{
    internal class CellStateService
    {
        internal static int[,] GetRandomStep(int size)
        {
            var rand = new Random();
            var array = new int[size, size];
            for (var i = 0; i < size; ++i)
            {
                for (var j = 0; j < size; ++j)
                {
                    array[i, j] = rand.Next(0, 2);
                }
            }

            return array;
        }

        internal static int[,] GetNextStep(int[,] array)
        {
            if (array == null)
            {
                return new int[0, 0];
            }
            var length = array.GetLength(0);
            var result = new int[length, length];

            for (var i = 0; i < length; ++i)
            {
                for (var j = 0; j < length; ++j)
                {
                    var coordinates = GetCoordinates(i, j, length);
                    var score = GetScore(array, coordinates);
                    var currState = array[i, j];
                    var newState = GetState(currState, score);

                    result[i, j] = newState;
                }
            }

            return result;
        }
        
        private static IEnumerable<Tuple<int,int>> GetCoordinates(int i, int j, int limit)
        {
            var allI = new int[3] { i, i - 1, i + 1 };
            var allJ = new int[3] { j, j - 1, j + 1 };

            var allCoordinates = allI.SelectMany(coordI => allJ.Select(coordJ => Tuple.Create(coordI, coordJ)));
            var validCoordinates = allCoordinates.Where(c =>
                c.Item1 >= 0 &&
                c.Item2 >= 0 &&
                c.Item1 < limit &&
                c.Item2 < limit &&
                (c.Item1 != i || c.Item2 != j));

            return validCoordinates;
        }

        private static int GetScore(int[,] array, IEnumerable<Tuple<int, int>> coordinates)
        {
            var score = 0;
            foreach (var coordinate in coordinates)
            {
                score += array[coordinate.Item1, coordinate.Item2];
            }

            return score;
        }

        private static int GetState(int currState, int score)
        {
            if (currState == 1 &&
                score < 2)
            {
                return 0;
            }
            if (currState == 1 &&
                score == 2)
            {
                return 1;
            }
            if (currState == 1 &&
                score == 3)
            {
                return 1;
            }
            if (currState == 1 &&
                score > 3)
            {
                return 0;
            }
            if (currState == 0 &&
                score == 3)
            {
                return 1;
            }

            return 0;
        }
    }
}

/*
1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

A B C

D * E

F G H

*/