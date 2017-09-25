import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorSelectorDemoModule } from './color-selector-demo/color-selector-demo.module';


@NgModule({
    imports: [
        BrowserModule,
        ColorSelectorDemoModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }
