import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BukuComponent } from './buku/buku.component';
import { BukuListComponent } from './Buku/buku-list/buku-list.component';
import { BukuAddComponent } from './Buku/buku-add/buku-add.component';
import { SumBukuDirective } from './Buku/hover-highlight.directive';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukuListComponent,
    BukuAddComponent,
    // TreeViewComponent,
    SumBukuDirective,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
