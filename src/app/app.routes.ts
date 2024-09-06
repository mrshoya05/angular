import { Routes } from '@angular/router';
import { HoomeComponent } from './Component/hoome/hoome.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';

export const routes: Routes = [
    {path: 'home',
        component: HoomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
