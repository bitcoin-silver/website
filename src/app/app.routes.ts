import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LearnComponent } from './views/learn/learn.component';
import { SolutionsComponent } from './views/solutions/solutions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'solutions', component: SolutionsComponent },
];
