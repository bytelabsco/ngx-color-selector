/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BytelabsColorSelectorModule, IColor, PalettePosition, MATERIAL_COLORS, ColorSelectorConfig } from '@bytelabsco/ngx-color-selector';

export function colorSelectorConfigProvider() {
  return new ColorSelectorConfig({ palette: MATERIAL_COLORS });
}

@Component({
  selector: 'app-component',
  templateUrl: 'app-component.html'
})
export class AppComponent {

  PalettePosition = PalettePosition;

  public options = {
    palette: MATERIAL_COLORS,
    position: PalettePosition.BottomLeft
  };

  constructor() { console.log('options', this.options); }



  public currentColor: IColor = {
    hex: '#000000'
  };
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BytelabsColorSelectorModule.forRoot(colorSelectorConfigProvider())
  ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
