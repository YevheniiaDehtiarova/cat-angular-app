import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat.interface';
import { CatService } from 'src/app/services/cat.service';
import { BaseComponent } from '../base/base.component';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { CatDetailComponent } from '../cat-detail/cat-detail.component';
import { RouterLink } from '@angular/router';
import { BreedFilterComponent } from '../breed-filter/breed-filter.component';
import { NgIf } from '@angular/common';
import { Breed } from 'src/app/models/breed.interface';

@Component({
  selector: 'app-cat-view',
  templateUrl: './cat-view.component.html',
  imports: [CatDetailComponent, BreedFilterComponent, RouterLink, NgIf],
  styleUrls: ['./cat-view.component.css'],
  standalone: true,
})
export class CatViewComponent extends BaseComponent implements OnInit {
  public cats: Array<Cat> = [];
  public breeds$: BehaviorSubject<Array<Breed>> = new BehaviorSubject<Array<Breed>>([]);

  constructor(private catService: CatService) {
    super();
  }

  ngOnInit(): void {
    this.getCats();
  }

  public getCats(event?: string): void {
    this.catService
      .getCats(event)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.cats = data;
        this.updateBreeds();
      });
  }

  public breedHasChoosen(event: string) {
     event === 'all' ? this.getCats() : this.getCats(event)
  }

  private updateBreeds(): void {
    const breeds = this.cats.flatMap(cat => cat.breeds);
    this.breeds$.next(breeds); 
  }
}
