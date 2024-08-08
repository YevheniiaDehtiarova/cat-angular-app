import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from '../app/components/base/base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({ 
    declarations: [
   /*      AppComponent, */
        BaseComponent
    ],
/*     bootstrap: [AppComponent], */
    imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
