export interface IColor {
    hex?: string;
    r?: number;
    g?: number;
    b?: number;
}

export enum PaletteDirection {
    Rows,
    Columns
}

export enum PalettePosition {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight
}

export interface ISwatchSize {
    height: number;
    width: number;
}

export interface IColorSelectorConfig {
    palette: IColor[];
    direction: PaletteDirection;
    itemSize: ISwatchSize;
    itemsPer: number;
    position: PalettePosition;
}

export class ColorSelectorConfig implements IColorSelectorConfig {
    palette: IColor[];
    direction: PaletteDirection;
    itemSize: ISwatchSize;
    itemsPer: number;
    position: PalettePosition;

    constructor(config?: ColorSelectorConfig) {
        for (const option of Object.keys(COLOR_SELECTOR_CONFIG_DEFAULTS)) {
            this[option] = config && config[option] != null ? config[option] : COLOR_SELECTOR_CONFIG_DEFAULTS[option];
        }
    }
}

// http://htmlcolorcodes.com/color-chart/flat-design-color-chart/
export const FLAT_COLORS: IColor[] = [
    // POMEGRANATE
    { hex: '#F9EBEA' },
    { hex: '#F2D7D5' },
    { hex: '#E6B0AA' },
    { hex: '#D98880' },
    { hex: '#CD6155' },
    { hex: '#C0392B' },
    { hex: '#A93226' },
    { hex: '#922B21' },
    { hex: '#7B241C' },
    { hex: '#641E16' },

    // ALIZARIN
    { hex: '#FDEDEC' },
    { hex: '#FADBD8' },
    { hex: '#F5B7B1' },
    { hex: '#F1948A' },
    { hex: '#EC7063' },
    { hex: '#E74C3C' },
    { hex: '#CB4335' },
    { hex: '#B03A2E' },
    { hex: '#943126' },
    { hex: '#78281F' },

    // AMETHYST
    { hex: '#F5EEF8' },
    { hex: '#EBDEF0' },
    { hex: '#D7BDE2' },
    { hex: '#C39BD3' },
    { hex: '#AF7AC5' },
    { hex: '#9B59B6' },
    { hex: '#884EA0' },
    { hex: '#76448A' },
    { hex: '#633974' },
    { hex: '#512E5F' },

    // WISTERIA
    { hex: '#F4ECF7' },
    { hex: '#E8DAEF' },
    { hex: '#D2B4DE' },
    { hex: '#BB8FCE' },
    { hex: '#A569BD' },
    { hex: '#8E44AD' },
    { hex: '#7D3C98' },
    { hex: '#6C3483' },
    { hex: '#5B2C6F' },
    { hex: '#4A235A' },

    // BELIZE HOLE
    { hex: '#EAF2F8' },
    { hex: '#D4E6F1' },
    { hex: '#A9CCE3' },
    { hex: '#7FB3D5' },
    { hex: '#5499C7' },
    { hex: '#2980B9' },
    { hex: '#2471A3' },
    { hex: '#1F618D' },
    { hex: '#1A5276' },
    { hex: '#154360' },

    // PETER RIVER
    { hex: '#EBF5FB' },
    { hex: '#D6EAF8' },
    { hex: '#AED6F1' },
    { hex: '#85C1E9' },
    { hex: '#5DADE2' },
    { hex: '#3498DB' },
    { hex: '#2E86C1' },
    { hex: '#2874A6' },
    { hex: '#21618C' },
    { hex: '#1B4F72' },

    // TURQUOISE
    { hex: '#E8F8F5' },
    { hex: '#D1F2EB' },
    { hex: '#A3E4D7' },
    { hex: '#76D7C4' },
    { hex: '#48C9B0' },
    { hex: '#1ABC9C' },
    { hex: '#17A589' },
    { hex: '#148F77' },
    { hex: '#117864' },
    { hex: '#0E6251' },

    // GREEN SEA
    { hex: '#E8F6F3' },
    { hex: '#D0ECE7' },
    { hex: '#A2D9CE' },
    { hex: '#73C6B6' },
    { hex: '#45B39D' },
    { hex: '#16A085' },
    { hex: '#138D75' },
    { hex: '#117A65' },
    { hex: '#0E6655' },
    { hex: '#0B5345' },

    // NEPHRITIS
    { hex: '#E9F7EF' },
    { hex: '#D4EFDF' },
    { hex: '#A9DFBF' },
    { hex: '#7DCEA0' },
    { hex: '#52BE80' },
    { hex: '#27AE60' },
    { hex: '#229954' },
    { hex: '#1E8449' },
    { hex: '#196F3D' },
    { hex: '#145A32' },

    // EMERALD
    { hex: '#EAFAF1' },
    { hex: '#D5F5E3' },
    { hex: '#ABEBC6' },
    { hex: '#82E0AA' },
    { hex: '#58D68D' },
    { hex: '#2ECC71' },
    { hex: '#28B463' },
    { hex: '#239B56' },
    { hex: '#1D8348' },
    { hex: '#186A3B' },

    // SUNFLOWER
    { hex: '#FEF9E7' },
    { hex: '#FCF3CF' },
    { hex: '#F9E79F' },
    { hex: '#F7DC6F' },
    { hex: '#F4D03F' },
    { hex: '#F1C40F' },
    { hex: '#D4AC0D' },
    { hex: '#B7950B' },
    { hex: '#9A7D0A' },
    { hex: '#7D6608' },

    // ORANGE
    { hex: '#FEF5E7' },
    { hex: '#FDEBD0' },
    { hex: '#FAD7A0' },
    { hex: '#F8C471' },
    { hex: '#F5B041' },
    { hex: '#F39C12' },
    { hex: '#D68910' },
    { hex: '#B9770E' },
    { hex: '#9C640C' },
    { hex: '#7E5109' },

    // CARROT
    { hex: '#FDF2E9' },
    { hex: '#FAE5D3' },
    { hex: '#F5CBA7' },
    { hex: '#F0B27A' },
    { hex: '#EB984E' },
    { hex: '#E67E22' },
    { hex: '#CA6F1E' },
    { hex: '#AF601A' },
    { hex: '#935116' },
    { hex: '#784212' },

    // PUMPKIN
    { hex: '#FBEEE6' },
    { hex: '#F6DDCC' },
    { hex: '#EDBB99' },
    { hex: '#E59866' },
    { hex: '#DC7633' },
    { hex: '#D35400' },
    { hex: '#BA4A00' },
    { hex: '#A04000' },
    { hex: '#873600' },
    { hex: '#6E2C00' },

    // CLOUDS
    { hex: '#FDFEFE' },
    { hex: '#FBFCFC' },
    { hex: '#F7F9F9' },
    { hex: '#F4F6F7' },
    { hex: '#F0F3F4' },
    { hex: '#ECF0F1' },
    { hex: '#D0D3D4' },
    { hex: '#B3B6B7' },
    { hex: '#979A9A' },
    { hex: '#7B7D7D' },

    // SILVER
    { hex: '#F8F9F9' },
    { hex: '#F2F3F4' },
    { hex: '#E5E7E9' },
    { hex: '#D7DBDD' },
    { hex: '#CACFD2' },
    { hex: '#BDC3C7' },
    { hex: '#A6ACAF' },
    { hex: '#909497' },
    { hex: '#797D7F' },
    { hex: '#626567' },

    // CONCRETE
    { hex: '#F4F6F6' },
    { hex: '#EAEDED' },
    { hex: '#D5DBDB' },
    { hex: '#BFC9CA' },
    { hex: '#AAB7B8' },
    { hex: '#95A5A6' },
    { hex: '#839192' },
    { hex: '#717D7E' },
    { hex: '#5F6A6A' },
    { hex: '#4D5656' },

    // ASBESTOS
    { hex: '#F2F4F4' },
    { hex: '#E5E8E8' },
    { hex: '#CCD1D1' },
    { hex: '#B2BABB' },
    { hex: '#99A3A4' },
    { hex: '#7F8C8D' },
    { hex: '#707B7C' },
    { hex: '#616A6B' },
    { hex: '#515A5A' },
    { hex: '#424949' },

    // WET ASPHALT
    { hex: '#EBEDEF' },
    { hex: '#D6DBDF' },
    { hex: '#AEB6BF' },
    { hex: '#85929E' },
    { hex: '#5D6D7E' },
    { hex: '#34495E' },
    { hex: '#2E4053' },
    { hex: '#283747' },
    { hex: '#212F3C' },
    { hex: '#1B2631' },

    // MIDNIGHT BLUE
    { hex: '#EAECEE' },
    { hex: '#D5D8DC' },
    { hex: '#ABB2B9' },
    { hex: '#808B96' },
    { hex: '#566573' },
    { hex: '#2C3E50' },
    { hex: '#273746' },
    { hex: '#212F3D' },
    { hex: '#1C2833' },
    { hex: '#17202A' }
];

export const COLOR_SELECTOR_CONFIG_DEFAULTS = {
    palette: FLAT_COLORS,
    direction: PaletteDirection.Columns,
    itemSize: { height: 20, width: 20 },
    itemsPer: 10,
    position: PalettePosition.BottomRight
};
