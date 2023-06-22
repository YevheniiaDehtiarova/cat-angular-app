import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CatDetailComponent } from './components/cat-detail/cat-detail.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SearchComponent,
    path:'search/:query'
  },
  {
    component: CatDetailComponent,
    path:'details/:id'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
