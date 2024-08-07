import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat.interface';
import { Observable } from 'rxjs';
import { Breed } from '../models/breed.interface';


@Injectable({
    providedIn: 'root',
  })

  export class CatService{
    constructor(private http: HttpClient) { }

    public getCats(id?: string):Observable<Array<Cat>> {
      let url= id ?  `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=live_7BZmf31R0GcuY4tjZLlMX3lPux5sHlVL7VHm4uYNWNIEn5Rub9sRu4cVgDzTC4ZD` :
      `https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_7BZmf31R0GcuY4tjZLlMX3lPux5sHlVL7VHm4uYNWNIEn5Rub9sRu4cVgDzTC4ZD`
      return this.http.get<Array<Cat>>(url);
    }

  

    public getBreeds(): Observable<Array<Breed>>{
      return this.http.get<Array<Breed>>(`https://api.thecatapi.com/v1/breeds/`)
    }
  }