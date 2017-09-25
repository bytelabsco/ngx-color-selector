import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local Imports
import { ColorSelectorDemoComponent } from './color-selector-demo.component';
import { BytelabsColorSelectorModule } from '../../../color-selector/color-selector.module';

@NgModule({
    imports: [
        CommonModule,
        BytelabsColorSelectorModule
    ],
    declarations: [
        ColorSelectorDemoComponent
    ],
    exports: [
        ColorSelectorDemoComponent
    ],
    bootstrap: [ColorSelectorDemoComponent],
    providers: []
})
export class ColorSelectorDemoModule { }
