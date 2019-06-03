import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './../shared/shared.module';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutes   
  ],
  declarations: [HomePageComponent, AboutPageComponent]
})
export class HomeModule { }
