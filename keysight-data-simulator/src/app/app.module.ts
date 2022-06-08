import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ButtonComponent } from './components/button/button.component';
import { BatchFormComponent } from './components/forms/batch-form/batch-form.component';
import { BtestFormComponent } from './components/forms/btest-form/btest-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    ButtonComponent,
    BatchFormComponent,
    BtestFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
