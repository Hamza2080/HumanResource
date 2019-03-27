import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class HttpServiceService {

    constructor(private http: HttpClient) { }

    // get data from api
    public getData() {

        return this.http.get("https://jsonplaceholder.typicode.com/users")
            .pipe(map((response: []) => response));
    }


    //post data to dummy server

    public postData(data) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http
            .post(`https://jsonplaceholder.typicode.com/users`, JSON.stringify(data))
            .pipe(map((response: []) => response));
    }
}
