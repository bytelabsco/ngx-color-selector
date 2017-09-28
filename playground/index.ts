/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BytelabsColorSelectorModule, IColor, PalettePosition, MATERIAL_COLORS } from '@bytelabsco/ngx-color-selector';

@Component({
  selector: 'app-component',
  templateUrl: 'app-component.html'
})
export class AppComponent {

  PalettePosition = PalettePosition;

  public options = {
    palette: MATERIAL_COLORS,
    position: PalettePosition.TopLeft
  };

  public currentColor: IColor = {
    hex: '#000000'
  };
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, BytelabsColorSelectorModule]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
