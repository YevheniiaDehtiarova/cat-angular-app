import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat.interface';


@Injectable({
    providedIn: 'root',
  })

  export class CatService{
    constructor(private http: HttpClient) { }

    getCats(){
        return this.http.get<Array<Cat>>('https://api.thecatapi.com/v1/images/0XYvRd7oD')
    }

    searchCat() {
        return this.http.get<Array<Cat>>(
         // `https://api.thecatapi.com/v1/images/search?api_key=live_7BZmf31R0GcuY4tjZLlMX3lPux5sHlVL7VHm4uYNWNIEn5Rub9sRu4cVgDzTC4ZD?limit=10`
         `https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_7BZmf31R0GcuY4tjZLlMX3lPux5sHlVL7VHm4uYNWNIEn5Rub9sRu4cVgDzTC4ZD`
        );
      }
  }