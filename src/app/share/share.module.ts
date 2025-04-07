/// src/app/share/share.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { CrudComponent } from './components/crud/crud.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    CrudComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ],
  exports: [
    CrudComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent
  ]
})
export class ShareModule {}
