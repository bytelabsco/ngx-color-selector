import { Component } from '@angular/core';
import { IColor, PalettePosition } from '../../../color-selector/color-selector-config';

@Component({
    selector: 'color-selector-demo',
    templateUrl: './color-selector-demo.html'
})
export class ColorSelectorDemoComponent {

    PalettePosition = PalettePosition;

    public currentColor: IColor = {
        hex: '#000000'
    };

}
