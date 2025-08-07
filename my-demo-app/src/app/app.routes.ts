import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
export const routes: Routes = [

    {
        path: 'about',
        component: About,
        title: 'About Us'
    },
    {
        path: 'home',
        component: Home,
        title: 'Home'
    }


];
