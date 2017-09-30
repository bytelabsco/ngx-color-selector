import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSelectorConfig, IColorSelectorConfig } from './color-selector-config';

import { BytelabsColorSelectorComponent } from './color-selector.component';
import { BytelabsColorSelectorPaletteComponent } from './color-selector-palette.component';

export * from './color-selector-config';
export * from './color-selector-palette.component';
export * from './color-selector.component';
export * from './color-selector.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        BytelabsColorSelectorComponent,
        BytelabsColorSelectorPaletteComponent
    ],
    declarations: [
        BytelabsColorSelectorComponent,
        BytelabsColorSelectorPaletteComponent
    ]
})
export class BytelabsColorSelectorModule {

    static forRoot(config: IColorSelectorConfig): ModuleWithProviders {
        return {
            ngModule: BytelabsColorSelectorModule,
            providers: [{ provide: ColorSelectorConfig, useValue: new ColorSelectorConfig(config) }]
        };
    }
}
