import { IColor } from './interfaces/color';
import { PaletteDirection } from './interfaces/palette-direction';
import { PalettePosition } from './interfaces/palette-position';
import { ISwatchSize } from './interfaces/swatch-size';

import { FLAT_COLORS } from './color-palettes/flat-colors';

export interface IColorSelectorConfig {
    palette?: IColor[];
    direction?: PaletteDirection;
    itemSize?: ISwatchSize;
    itemsPer?: number;
    position?: PalettePosition;
}

export class ColorSelectorConfig implements IColorSelectorConfig {
    palette: IColor[] = COLOR_SELECTOR_CONFIG_DEFAULTS.palette;
    direction: PaletteDirection = COLOR_SELECTOR_CONFIG_DEFAULTS.direction;
    itemSize: ISwatchSize = COLOR_SELECTOR_CONFIG_DEFAULTS.itemSize;
    itemsPer: number = COLOR_SELECTOR_CONFIG_DEFAULTS.itemsPer;
    position: PalettePosition = COLOR_SELECTOR_CONFIG_DEFAULTS.position;
}

const COLOR_SELECTOR_CONFIG_DEFAULTS: IColorSelectorConfig = {
    palette: FLAT_COLORS,
    direction: PaletteDirection.Columns,
    itemSize: { height: 20, width: 20 },
    itemsPer: 10,
    position: PalettePosition.BottomRight
};
