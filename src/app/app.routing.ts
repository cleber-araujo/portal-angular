import { Routes, RouterModule } from "@angular/router";


export const routes: Routes = [
    { path: 'shared', loadChildren: './shared/shared.module#SharedModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' } 
];

export const RoutingProviders: any[] = [];
export const AppRoutes = RouterModule.forRoot(routes);