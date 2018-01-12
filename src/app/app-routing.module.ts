import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { AboutComponent } from './about/about.component';
import { PgclassesComponent } from './pgclasses/pgclasses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FaqComponent } from './faq/faq.component'
import { WeatherComponent } from './weather/weather.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'weather',
        component: WeatherComponent
    },
    {
        path: 'classes',
        component: PgclassesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '',
        component: WelcomeComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
