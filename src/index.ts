import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSelectorConfig, COLOR_SELECTOR_CONFIG_DEFAULTS } from './color-selector-config';

import { BytelabsColorSelectorComponent } from './color-selector.component';
import { BytelabsColorSelectorPaletteComponent } from './color-selector-palette.component';

export * from './color-selector-config';
export * from './color-selector-palette.component';
export * from './color-selector.component';
export * from './color-selector.service';


export function configFactory(config: any = {}) {

    let initialConfig = {}

    for (const option of Object.keys(COLOR_SELECTOR_CONFIG_DEFAULTS)) {
        initialConfig[option] = config[option] || COLOR_SELECTOR_CONFIG_DEFAULTS[option];
    }

    return initialConfig;
}

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

    static forRoot(config: any = {}): ModuleWithProviders {
        return {
            ngModule: BytelabsColorSelectorModule,
            providers: [{
                provide: ColorSelectorConfig, useFactory: configFactory, deps: [config]
            }]
        };
    }
}
