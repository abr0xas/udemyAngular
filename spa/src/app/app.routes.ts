import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component'; 
import { HeroeComponent } from './components/heroe/heroe.component';
import { EncontradosComponent } from './components/encontrados/encontrados.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'encontrados/:buscarNombre', component: EncontradosComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);