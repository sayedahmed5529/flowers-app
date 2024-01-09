import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CollapseModule.forRoot(),
    TranslateModule,
    RouterModule,
    NgxPaginationModule,
  ],
  exports: [FooterComponent, NavbarComponent,SidebarComponent]
})
export class SharedModule { }
