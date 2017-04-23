import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CellStateService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private cellStateUrl = 'http://localhost:52952/api/cellstate';
    constructor(private http: Http) { }

    getClean(size: number):  Promise<number[][]> {
        let result: number[][] = [];
        for (var i: number = 0; i < size; ++i) {
            result[i] = [];
            for(var j: number = 0; j < size; ++j) {
                result[i][j] = 0;
            }
        }

        return Promise.resolve(result);
    }

    getRandom(size: number): Promise<number[][]> {
        var url = `${this.cellStateUrl}/rand/${size}`;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(r => r.json() as number[][])
            .catch(this.handleError);
    }

    getNext(state: string): Promise<number[][]> {
        var url = `${this.cellStateUrl}/next/${state}`;
        return this.http.get(url)
            .toPromise()
            .then(r => r.json() as number[][])
            .catch(this.handleError);
    }

    postNext(state: number[][]): Promise<number[][]> {
        var url = `${this.cellStateUrl}/next`;
        var input = JSON.stringify(state);
        return this.http.post(url, input, { headers: this.headers })
            .toPromise()
            .then(r => r.json() as number[][])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}