import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSelectorConfig } from './color-selector-config';

import { BytelabsColorSelectorComponent } from './color-selector.component';
import { BytelabsColorSelectorPaletteComponent } from './color-selector-palette.component';

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

    static forRoot(config: ColorSelectorConfig): ModuleWithProviders {
        return {
            ngModule: BytelabsColorSelectorModule,
            providers: [{ provide: ColorSelectorConfig, useValue: config }]
        };
    }
}
