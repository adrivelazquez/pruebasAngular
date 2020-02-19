import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './main/home/home.component';
import { HttpClientModule  } from '@angular/common/http';
import { CollapseComponent } from './main/collapse/collapse.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollapseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
