import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {CalculateComponent} from './calculate/calculate.component';
import {HomeComponent} from './home/home.component'
import {UserComponent} from './user/user.component'

const routeOutlet: Routes = [
    { 
        path: 'register',
        component: RegisterComponent 
    },
    { 
        path: 'calculate', 
        component: CalculateComponent 
    },
    { 
        path: 'home', 
        component: HomeComponent 
    },
     {
         path: 'login',
         component: UserComponent
     },
    { 
      path: '**', 
      redirectTo: 'home' 
    }
];

export const routing = RouterModule.forRoot(routeOutlet);

