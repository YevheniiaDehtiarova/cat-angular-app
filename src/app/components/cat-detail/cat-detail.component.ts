import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Breed } from 'src/app/models/breed.interface';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  imports: [NgFor, NgIf, AsyncPipe],
  styleUrls: ['./cat-detail.component.css'],
  standalone: true,
})
export class CatDetailComponent  {
  @Input() breeds$: BehaviorSubject<Array<Breed>> = new BehaviorSubject<Array<Breed>>([]);

  trackByFn(index: number, breed: Breed): string {
    return breed.id; 
  }
  
}
