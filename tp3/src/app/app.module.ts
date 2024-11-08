import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component'; 
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule

@NgModule({
  declarations: [
    AppComponent,        
    ProductListComponent,
    ProductFilterComponent,
],
imports: [
    FormsModule,        
    BrowserModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
