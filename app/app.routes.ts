import {provideRouter, RouterConfig} from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { PeopleComponent } from './people.component';

import { ArticlesComponent } from './articles.component';


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'people',
        component: PeopleComponent
    },
    {
        path: 'articles',
        component: ArticlesComponent
    }
];

export const appRouterProviders   = [
    provideRouter(routes)
];
