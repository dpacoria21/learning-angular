import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { MainPageComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';






@NgModule({
  declarations: [
    AddCharacterComponent,
    MainPageComponent,
    ListDBZComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
