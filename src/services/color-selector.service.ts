import { Injectable, Optional } from '@angular/core';
import { IColorSelectorConfig, ColorSelectorConfig } from '../color-selector-config';
import { IColor } from '../interfaces/color';

import { Observable, ReplaySubject } from 'rxjs';

const MIN_COLOR = 0;
const MAX_COLOR = 255;

@Injectable()
export class BytelabsColorSelectorService {

    private _config: ColorSelectorConfig = new ColorSelectorConfig();

    private _currentColor: IColor = null;
    private _currentColorSubject: ReplaySubject<IColor> = new ReplaySubject<IColor>();

    public constructor() {
    }

    get config() {
        return this._config;
    }

    set config(value: IColorSelectorConfig) {
        for (const option of Object.keys(value)) {
            this._config[option] = value[option];

            if (option === 'palette') {
                this.verifyPalette(this.config.palette);
            }
        }
    }

    get currentColor() {
        return this._currentColor;
    }

    set currentColor(color: IColor) {

        if (!color) {
            this._currentColor = null;
            this._currentColor = null;
            return;
        }

        if (!color.hex && (color.r == null || color.g == null || color.b == null)) {
            // Invalid color value
            return;
        }

        if (color.hex) {
            this.calculateRGB(color);
        } else {
            this.calculateHex(color);
        }

        // Find a match for this color in the palette if it's there
        let match = this.config.palette.find(paletteColor => {
            return color.r === paletteColor.r && color.g === paletteColor.g && color.b === paletteColor.b;
        })

        this._currentColor = match || color;
        this._currentColorSubject.next(this._currentColor);
    }

    get currentColor$() {
        return this._currentColorSubject.asObservable() as Observable<IColor>;
    }

    public verifyPalette(palette: IColor[]) {

        // Loop through the palette and make sure it's complete
        for (const color of palette) {
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

        const hex = this.expandHex(color.hex);

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

    private expandHex(shortHex: string) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const hex = shortHex.replace(shorthandRegex, (m, r, g, b) => {
            m = m; // TODO - Linter
            return r + r + g + g + b + b;
        });

        return hex;
    }

    private componentToHex = (c: number): string => {

        if (c < 0 || c > 255) {
            throw Error(`Color component value is out of 0-255 range ${c}`);
        }

        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }
}
