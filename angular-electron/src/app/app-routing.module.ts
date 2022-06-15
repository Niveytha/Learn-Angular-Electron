import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { MainContentComponent } from './components/main-content/main-content.component';
import { AlertSimulationComponent } from './components/alert-simulation/alert-simulation.component';
import { FinalPageComponent } from './components/final-page/final-page.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'alert-simulation', component: AlertSimulationComponent },
  { path: 'end', component: FinalPageComponent },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
