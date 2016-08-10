import { Routes, RouterModule }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'heroes',
		component: HeroesComponent
	}
];

export const routing = RouterModule.forRoot(appRoutes);