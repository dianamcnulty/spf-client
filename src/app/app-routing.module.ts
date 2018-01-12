import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { AboutComponent } from './about/about.component';
import { PgclassesComponent } from './pgclasses/pgclasses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FaqComponent } from './faq/faq.component'
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
        path: 'classes',
        component: PgclassesComponent
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
