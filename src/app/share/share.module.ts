import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrudComponent } from './components/crud/crud.component';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './components/login/login.component';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    BannerComponent,
    FooterComponent,
    CrudComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    BannerComponent,
    FooterComponent,
    CrudComponent,
    LoginComponent
  ]
})
export class ShareModule { }
