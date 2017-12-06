import { Component, OnInit } from '@angular/core';
import { BytelabsColorSelectorService } from '../../services/color-selector.service';
import { IColor } from '../../interfaces/color';
import { ISwatchSize } from '../../interfaces/swatch-size';
import { PaletteDirection } from '../../interfaces/palette-direction';
import { PalettePosition } from '../../interfaces/palette-position';

@Component({
    selector: 'bytelabs-color-selector-palette',
    templateUrl: 'color-selector-palette.component.html',
    styleUrls: ['./color-selector-palette.component.scss']
})
export class BytelabsColorSelectorPaletteComponent implements OnInit {

    PaletteDirection = PaletteDirection;

    currentColor: IColor;

    height: number;
    width: number;
    paletteDirection: PaletteDirection;

    swatchSize: ISwatchSize;

    hoverColor: IColor;
    hoverTop: number;
    hoverLeft: number;

    posClass: string;

    palette: IColor[] = this.colorSelectorService.config.palette;

    public constructor(private colorSelectorService: BytelabsColorSelectorService) {
        this.colorSelectorService.currentColor$.subscribe(color => {
            this.currentColor = color;
        })
    }

    ngOnInit() {

        this.paletteDirection = this.colorSelectorService.config.direction;

        this.swatchSize = this.colorSelectorService.config.itemSize;

        switch (this.colorSelectorService.config.position) {
            case PalettePosition.BottomLeft:
                this.posClass = 'blcs-pos-bl';
                break;
            case PalettePosition.BottomRight:
                this.posClass = 'blcs-pos-br';
                break;
            case PalettePosition.TopLeft:
                this.posClass = 'blcs-pos-tl';
                break;
            case PalettePosition.TopRight:
                this.posClass = 'blcs-pos-tr';
                break;
        }

        // Compute group size
        const groupSize: number = Math.ceil(this.colorSelectorService.config.palette.length / this.colorSelectorService.config.itemsPer);
        let cols: number;
        let rows: number;

        if (this.colorSelectorService.config.direction === PaletteDirection.Columns) {
            rows = this.colorSelectorService.config.itemsPer;
            cols = groupSize;
        } else {
            rows = groupSize;
            cols = this.colorSelectorService.config.itemsPer;

        }

        this.height = rows * this.colorSelectorService.config.itemSize.height;
        this.width = cols * this.colorSelectorService.config.itemSize.width;
    }

    selectColor = (color: IColor) => {
        this.colorSelectorService.currentColor = color;
    }

    hoveredColor = (color: IColor, event: MouseEvent) => {

        this.hoverLeft = (event.fromElement as any).offsetLeft - 2;
        this.hoverTop = (event.fromElement as any).offsetTop - 2;

        this.hoverColor = color;
    }
}
