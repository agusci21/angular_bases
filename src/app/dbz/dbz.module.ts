import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/dbz/components/list/list.component';
import { AddCharacterComponent } from './components/dbz/components/add-character/add-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class DbzModule { }
