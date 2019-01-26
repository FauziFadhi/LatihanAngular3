import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BukuComponent } from './buku/buku.component';

const routes: Routes = [
	{path : 'item', component : BukuComponent},
	{path : 'item-edit/:id', component : BukuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
