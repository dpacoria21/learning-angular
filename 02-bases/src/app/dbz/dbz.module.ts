import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
