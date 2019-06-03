import { AboutPageComponent } from './about-page/about-page.component';
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";


const routes: Routes = [
    { path: '', component: HomePageComponent,
      children:[
        { path: 'about', component: AboutPageComponent}
      ]

    }
   

];

export const RoutingProviders: any[] = [];
export const HomeRoutes = RouterModule.forRoot(routes); 