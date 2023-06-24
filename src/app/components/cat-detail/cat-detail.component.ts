import { Component, Input, OnInit } from '@angular/core';
import { Breed } from 'src/app/models/breed.interface';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent  {
  @Input() breeds: Array<Breed> =[];
}
