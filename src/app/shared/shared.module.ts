import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './layout/footer/footer.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FooterComponent, LeftMenuComponent, HeaderComponent],
  exports:[ FooterComponent, LeftMenuComponent, HeaderComponent ]
})
export class SharedModule { }
