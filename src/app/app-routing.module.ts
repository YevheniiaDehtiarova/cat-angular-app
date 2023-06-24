import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatViewComponent} from './components/cat-view/cat-view.component';
import { CatDetailComponent } from './components/cat-detail/cat-detail.component';

const routes: Routes = [
  {
    component: CatViewComponent,
    path: '',
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
