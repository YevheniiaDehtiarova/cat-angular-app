import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat.interface';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cats: Array<Cat> = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.searchCat().subscribe((data) => [
      this.cats = data,
      console.log(this.cats)
    ])
  }

}
