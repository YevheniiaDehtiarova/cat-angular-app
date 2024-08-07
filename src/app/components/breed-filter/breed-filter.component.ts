import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreedFilter } from 'src/app/models/breed-filter.interface';
import { Breed } from 'src/app/models/breed.interface';
import { CatService } from 'src/app/services/cat.service';
import { BaseComponent } from '../base/base.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-breed-filter',
  templateUrl: './breed-filter.component.html',
  imports: [ MatOptionModule, MatSelectModule, NgFor],
  styleUrls: ['./breed-filter.component.css'],
  standalone: true
})
export class BreedFilterComponent extends BaseComponent implements OnInit {
  public breeds: Array<Breed> = [];
  public breedFilterArray: Array<BreedFilter> = [];
  public selectedBreed: string | undefined;
  
  @Output() choosedBreed = new EventEmitter<string>();

  constructor(public catService: CatService) {
    super();
  }

  ngOnInit(): void {
    this.getBreed();
  }

  public getBreed(): void {
    this.catService.getBreeds().subscribe((data: Array<Breed>) => {
      this.breeds = data;
      this.breeds.map((res:Breed) => {
        this.breedFilterArray.push({
          id: res.id,
          name: res.name,
        });
      });
      this.breedFilterArray.unshift({
        id: 'all',
        name: 'All breeds',
      });
    });
  }

  public filterBreed(event: any) {
    this.choosedBreed.emit(event.value);
  }
}
