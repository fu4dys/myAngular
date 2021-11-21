import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsDatabaseComponent } from './cards/cards-database.component';

const routes: Routes = [
  {path:'cards', component:CardsDatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
