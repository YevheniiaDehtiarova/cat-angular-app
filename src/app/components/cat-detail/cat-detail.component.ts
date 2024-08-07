import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Breed } from 'src/app/models/breed.interface';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  imports: [NgFor, NgIf],
  styleUrls: ['./cat-detail.component.css'],
  standalone: true,
})
export class CatDetailComponent  {
  @Input() breeds: Array<Breed> =[];
}
