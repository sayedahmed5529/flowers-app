import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuirtyComponent } from './secuirty.component';

const routes: Routes = [{ path: '', component: SecuirtyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuirtyRoutingModule { }
