import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { NgModule } from '@angular/core';



import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryComponent,
    ProductComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, HttpClientModule, FormsModule,
    AppRoutingModule,
    CardModule,
    TableModule, ButtonModule, InputTextModule, DialogModule,
    ChipsModule, ConfirmDialogModule, PanelModule, InputTextareaModule,
    KeyFilterModule, AutoCompleteModule, DropdownModule, ListboxModule
  ],
  providers: [CategoryService, ProductService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
