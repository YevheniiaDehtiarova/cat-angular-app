import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
/*   {
    component: CatViewComponent,
    path: '',
  },
  {
    component: CatDetailComponent,
    path:'details/:id'
  }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
