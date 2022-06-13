import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ButtonComponent } from './components/button/button.component';
import { BatchFormComponent } from './components/forms/batch-form/batch-form.component';
import { BtestFormComponent } from './components/forms/btest-form/btest-form.component';
import { AlertSimulationComponent } from './components/alert-simulation/alert-simulation.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { FinalPageComponent } from './components/final-page/final-page.component';

const appRoutes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'alert-simulation', component: AlertSimulationComponent },
  { path: 'end', component: FinalPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    ButtonComponent,
    BatchFormComponent,
    BtestFormComponent,
    AlertSimulationComponent,
    DropdownMenuComponent,
    FinalPageComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
