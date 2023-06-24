import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreedFilter } from 'src/app/models/breed-filter.interface';
import { Breed } from 'src/app/models/breed.interface';
import { CatService } from 'src/app/services/cat.service';
import { BaseComponent } from '../base/base.component';
import { MatOptionSelectionChange} from '@angular/material';

@Component({
  selector: 'app-breed-filter',
  templateUrl: './breed-filter.component.html',
  styleUrls: ['./breed-filter.component.css']
})
export class BreedFilterComponent extends BaseComponent implements OnInit {
  public breeds: Array<Breed> = [];
  public breedFilter: Array<BreedFilter>  = [];
  public selectedBreed: string | undefined;
  @Output() choosedBreed = new EventEmitter<string>()

  constructor(public catService: CatService) {
    super();
  }

  ngOnInit(): void {
    this.catService.getBreeds().subscribe((data) => {
     this.breeds = data;
     this.breeds.map(res => {
      this.breedFilter.push({
        id: res.id,
        name: res.name
      })
     })
     this.breedFilter.unshift({
      id: 'all',
      name: 'All breeds'
    })
    })
  }
  public filterBreed(event: any){
      this.choosedBreed.emit(event.value);
  }
}
