import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BytelabsColorSelectorComponent } from './components/color-selector/color-selector.component';
import { BytelabsColorSelectorPaletteComponent } from './components/color-selector-palette/color-selector-palette.component';
import { BytelabsColorSelectorService } from './services/color-selector.service';

export * from './components/color-selector/color-selector.component';
export * from './components/color-selector-palette/color-selector-palette.component';
export * from './services/color-selector.service';

export * from './interfaces/color';
export * from './interfaces/palette-direction';
export * from './interfaces/palette-position';
export * from './interfaces/swatch-size';

export * from './color-palettes/flat-colors';
export * from './color-palettes/material-colors';

export * from './color-selector-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BytelabsColorSelectorComponent,
    BytelabsColorSelectorPaletteComponent
  ],
  exports: [
    BytelabsColorSelectorComponent,
    BytelabsColorSelectorPaletteComponent
  ]
})
export class BytelabsColorSelectorModule { }
