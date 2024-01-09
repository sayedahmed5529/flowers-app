import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UserListComponent,AddUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    TranslateModule.forRoot(),
    NgxPaginationModule,
    ModalModule.forRoot(),
    UserRoutingModule

  ]
})
export class UserModule { }
