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
    palette?: IColor[];
    direction?: PaletteDirection;
    itemSize?: ISwatchSize;
    itemsPer?: number;
    position?: PalettePosition;
}

export class ColorSelectorConfig implements IColorSelectorConfig {
    palette: IColor[];
    direction: PaletteDirection;
    itemSize: ISwatchSize;
    itemsPer: number;
    position: PalettePosition;

    constructor(config?: any) {
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

// http://htmlcolorcodes.com/color-chart/material-design-color-chart/
export const MATERIAL_COLORS = [
    // RED
    { hex: '#FFEBEE' },
    { hex: '#FFCDD2' },
    { hex: '#EF9A9A' },
    { hex: '#E57373' },
    { hex: '#EF5350' },
    { hex: '#F44336' },
    { hex: '#E53935' },
    { hex: '#D32F2F' },
    { hex: '#C62828' },
    { hex: '#B71C1C' },

    // PINK
    { hex: '#FCE4EC' },
    { hex: '#F8BBD0' },
    { hex: '#F48FB1' },
    { hex: '#F06292' },
    { hex: '#EC407A' },
    { hex: '#E91E63' },
    { hex: '#D81B60' },
    { hex: '#C2185B' },
    { hex: '#AD1457' },
    { hex: '#880E4F' },

    // PURPLE
    { hex: '#F3E5F5' },
    { hex: '#E1BEE7' },
    { hex: '#CE93D8' },
    { hex: '#BA68C8' },
    { hex: '#AB47BC' },
    { hex: '#9C27B0' },
    { hex: '#8E24AA' },
    { hex: '#7B1FA2' },
    { hex: '#6A1B9A' },
    { hex: '#4A148C' },

    // DEEP PURPLE
    { hex: '#EDE7F6' },
    { hex: '#D1C4E9' },
    { hex: '#B39DDB' },
    { hex: '#9575CD' },
    { hex: '#7E57C2' },
    { hex: '#673AB7' },
    { hex: '#5E35B1' },
    { hex: '#512DA8' },
    { hex: '#4527A0' },
    { hex: '#311B92' },

    // INDIGO
    { hex: '#E8EAF6' },
    { hex: '#C5CAE9' },
    { hex: '#9FA8DA' },
    { hex: '#7986CB' },
    { hex: '#5C6BC0' },
    { hex: '#3F51B5' },
    { hex: '#3949AB' },
    { hex: '#303F9F' },
    { hex: '#283593' },
    { hex: '#1A237E' },

    // BLUE
    { hex: '#E3F2FD' },
    { hex: '#BBDEFB' },
    { hex: '#90CAF9' },
    { hex: '#64B5F6' },
    { hex: '#42A5F5' },
    { hex: '#2196F3' },
    { hex: '#1E88E5' },
    { hex: '#1976D2' },
    { hex: '#1565C0' },
    { hex: '#0D47A1' },

    // LIGHT BLUE
    { hex: '#E1F5FE' },
    { hex: '#B3E5FC' },
    { hex: '#81D4FA' },
    { hex: '#4FC3F7' },
    { hex: '#29B6F6' },
    { hex: '#03A9F4' },
    { hex: '#039BE5' },
    { hex: '#0288D1' },
    { hex: '#0277BD' },
    { hex: '#01579B' },

    // CYAN
    { hex: '#E0F7FA' },
    { hex: '#B2EBF2' },
    { hex: '#80DEEA' },
    { hex: '#4DD0E1' },
    { hex: '#26C6DA' },
    { hex: '#00BCD4' },
    { hex: '#00ACC1' },
    { hex: '#0097A7' },
    { hex: '#00838F' },
    { hex: '#006064' },

    // TEAL
    { hex: '#E0F2F1' },
    { hex: '#B2DFDB' },
    { hex: '#80CBC4' },
    { hex: '#4DB6AC' },
    { hex: '#26A69A' },
    { hex: '#009688' },
    { hex: '#00897B' },
    { hex: '#00796B' },
    { hex: '#00695C' },
    { hex: '#004D40' },

    // GREEN
    { hex: '#E8F5E9' },
    { hex: '#C8E6C9' },
    { hex: '#A5D6A7' },
    { hex: '#81C784' },
    { hex: '#66BB6A' },
    { hex: '#4CAF50' },
    { hex: '#43A047' },
    { hex: '#388E3C' },
    { hex: '#2E7D32' },
    { hex: '#1B5E20' },

    // LIGHT GREEN
    { hex: '#F1F8E9' },
    { hex: '#DCEDC8' },
    { hex: '#C5E1A5' },
    { hex: '#AED581' },
    { hex: '#9CCC65' },
    { hex: '#8BC34A' },
    { hex: '#7CB342' },
    { hex: '#689F38' },
    { hex: '#558B2F' },
    { hex: '#33691E' },

    // LIME
    { hex: '#F9FBE7' },
    { hex: '#F0F4C3' },
    { hex: '#E6EE9C' },
    { hex: '#DCE775' },
    { hex: '#D4E157' },
    { hex: '#CDDC39' },
    { hex: '#C0CA33' },
    { hex: '#AFB42B' },
    { hex: '#9E9D24' },
    { hex: '#827717' },

    // YELLOW
    { hex: '#FFFDE7' },
    { hex: '#FFF9C4' },
    { hex: '#FFF59D' },
    { hex: '#FFF176' },
    { hex: '#FFEE58' },
    { hex: '#FFEB3B' },
    { hex: '#FDD835' },
    { hex: '#FBC02D' },
    { hex: '#F9A825' },
    { hex: '#F57F17' },

    // AMBER
    { hex: '#FFF8E1' },
    { hex: '#FFECB3' },
    { hex: '#FFE082' },
    { hex: '#FFD54F' },
    { hex: '#FFCA28' },
    { hex: '#FFC107' },
    { hex: '#FFB300' },
    { hex: '#FFA000' },
    { hex: '#FF8F00' },
    { hex: '#FF6F00' },

    // ORANGE
    { hex: '#FFF3E0' },
    { hex: '#FFE0B2' },
    { hex: '#FFCC80' },
    { hex: '#FFB74D' },
    { hex: '#FFA726' },
    { hex: '#FF9800' },
    { hex: '#FB8C00' },
    { hex: '#F57C00' },
    { hex: '#EF6C00' },
    { hex: '#E65100' },

    // DEEP ORANGE
    { hex: '#FBE9E7' },
    { hex: '#FFCCBC' },
    { hex: '#FFAB91' },
    { hex: '#FF8A65' },
    { hex: '#FF7043' },
    { hex: '#FF5722' },
    { hex: '#F4511E' },
    { hex: '#E64A19' },
    { hex: '#D84315' },
    { hex: '#BF360C' },

    // BROWN
    { hex: '#EFEBE9' },
    { hex: '#D7CCC8' },
    { hex: '#BCAAA4' },
    { hex: '#A1887F' },
    { hex: '#8D6E63' },
    { hex: '#795548' },
    { hex: '#6D4C41' },
    { hex: '#5D4037' },
    { hex: '#4E342E' },
    { hex: '#3E2723' },

    // GREY
    { hex: '#FAFAFA' },
    { hex: '#F5F5F5' },
    { hex: '#EEEEEE' },
    { hex: '#E0E0E0' },
    { hex: '#BDBDBD' },
    { hex: '#9E9E9E' },
    { hex: '#757575' },
    { hex: '#616161' },
    { hex: '#424242' },
    { hex: '#212121' },

    // BLUE GREY
    { hex: '#ECEFF1' },
    { hex: '#CFD8DC' },
    { hex: '#B0BEC5' },
    { hex: '#90A4AE' },
    { hex: '#78909C' },
    { hex: '#607D8B' },
    { hex: '#546E7A' },
    { hex: '#455A64' },
    { hex: '#37474F' },
    { hex: '#263238' },

    // WHITE
    { hex: '#FFFFFF' },
    { hex: '#000000' }
]

export const COLOR_SELECTOR_CONFIG_DEFAULTS = {
    palette: FLAT_COLORS,
    direction: PaletteDirection.Columns,
    itemSize: { height: 20, width: 20 },
    itemsPer: 10,
    position: PalettePosition.BottomRight
};
