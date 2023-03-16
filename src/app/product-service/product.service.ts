import { Component } from '@angular/core/src/metadata';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core/src/di';

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    constructor(private _http: Http){ }
}

