import { Injectable } from '@angular/core';

@Injectable()
export class UrlConstantService {
    constructor() { }

    public SERVER_PORT = 'http://localhost:8080/';
}