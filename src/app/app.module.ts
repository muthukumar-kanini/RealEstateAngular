import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgentsComponent } from './agents/agents.component';
import { PropertiesComponent } from './properties/properties.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
