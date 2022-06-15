import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MainContentComponent } from './components/main-content/main-content.component';
import { AlertSimulationComponent } from './components/alert-simulation/alert-simulation.component';
import { FinalPageComponent } from './components/final-page/final-page.component';
import { BatchFormComponent } from './components/forms/batch-form/batch-form.component';
import { ButtonComponent } from './components/button/button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BtestFormComponent } from './components/forms/btest-form/btest-form.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';

import { AppComponent } from './app.component';

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

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
    FinalPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
