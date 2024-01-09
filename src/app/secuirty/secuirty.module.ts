import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuirtyComponent } from './secuirty.component';
import { SecuirtyRoutingModule } from './secuirty.routing';


@NgModule({
  declarations: [
    SecuirtyComponent
  ],
  imports: [
    CommonModule,
    SecuirtyRoutingModule
  ]
})
export class SecuirtyModule { }
