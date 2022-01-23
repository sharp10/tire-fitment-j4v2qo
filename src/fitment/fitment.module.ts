import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { FitmentContainerComponent } from './fitment-container/fitment-container.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    FitmentContainerComponent,
    SelectDropdownComponent
  ],
  exports: [
    FitmentContainerComponent
  ]
})
export class FitmentModule { }