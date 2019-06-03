import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Api {
    apiUrl = 'http://localhost:3000/items';

    constructor(private http: HttpClient) {}   
    getCartItems = () => this.http.get(this.apiUrl);

    getItems = () => this.http.get('http://localhost:3000/items');
}