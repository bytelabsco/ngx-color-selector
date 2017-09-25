import { Injectable, Optional } from '@angular/core';
import { ColorSelectorConfig, IColor } from './color-selector-config';

import { Observable, ReplaySubject } from 'rxjs';

const MIN_COLOR = 0;
const MAX_COLOR = 255;

@Injectable()
export class BytelabsColorSelectorService {

    public config: ColorSelectorConfig;

    private _currentColor: IColor;
    private _currentColorSubject: ReplaySubject<IColor> = new ReplaySubject<IColor>();

    get currentColor() {
        return this._currentColor;
    }

    set currentColor(color: IColor) {
        this._currentColor = color;
        this._currentColorSubject.next(color);
    }

    get currentColor$() {
        return this._currentColorSubject.asObservable() as Observable<IColor>;
    }

    public constructor( @Optional() config: ColorSelectorConfig) {
        this.config = config || new ColorSelectorConfig();

        // Loop through the palette and make sure it's complete
        for (const color of this.config.palette) {
            if (!color.hex && !color.r && !color.g && !color.b) {
                throw Error('Colors must provide at least a hex or rgb value');
            }

            // Even if the color has rgb provied with hex, we're going to recalculate the rbg anyway to make sure its accurate
            if (color.hex) {
                this.calculateRGB(color);
            }
            else {
                this.calculateHex(color);
            }
        }
    }

    private calculateRGB = (color: IColor) => {

        if (!color || !color.hex) {
            return;
        }

        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const hex = color.hex.replace(shorthandRegex, (m, r, g, b) => {
            m = m; // TODO - Linter
            return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (!result) {
            throw new Error(`Could not parse hex color ${color.hex}`);
        }

        const rgb = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        };

        color.r = rgb.r;
        color.g = rgb.g;
        color.b = rgb.b;
    }

    private calculateHex(color: IColor) {

        if (!color) {
            return;
        }

        if (color.r < MIN_COLOR || color.r > MAX_COLOR || color.g < MIN_COLOR || color.g > MAX_COLOR || color.b < MIN_COLOR || color.b > MAX_COLOR) {
            throw Error(`RGB out of valid 0-255 range: ${color.r}, ${color.g}, ${color.b}`);
        }

        return '#' + this.componentToHex(color.r) + this.componentToHex(color.g) + this.componentToHex(color.b);
    }

    private componentToHex = (c: number): string => {

        if (c < 0 || c > 255) {
            throw Error(`Color component value is out of 0-255 range ${c}`);
        }

        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }
}
