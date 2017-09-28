import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { IColor, PaletteDirection } from './color-selector-config';
import { BytelabsColorSelectorService } from './color-selector.service';

@Component({
    selector: 'bytelabs-color-selector',
    templateUrl: 'color-selector.component.html',
    styleUrls: ['./color-selector.component.scss'],
    providers: [BytelabsColorSelectorService],
    host: {
        '[style.height.px]': 'height',
        '[style.width.px]': 'width'
    }
})
export class BytelabsColorSelectorComponent implements OnInit {

    public paletteDirection = PaletteDirection;

    @Input() color: IColor;
    @Output() colorChange = new EventEmitter<IColor>();

    @Input() options: any;

    public showPalette: boolean = false;

    public height: number;
    public width: number;

    constructor(private elementRef: ElementRef, private colorSelectorService: BytelabsColorSelectorService) {
        this.colorSelectorService.currentColor$.subscribe((color: IColor) => {
            this.color = color;
            this.colorChange.next(color);
            this.showPalette = false;
        });

        this.height = this.colorSelectorService.config.itemSize.height;
        this.width = this.colorSelectorService.config.itemSize.width;
    }

    ngOnInit() {

        if (this.options) {
            this.colorSelectorService.updateConfig(this.options);
        }
    }

    @HostListener('document:click', ['$event'])
    clickOff() {
        if (!this.showPalette) {
            return;
        }

        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.showPalette = false;
        }
    }

    public togglePalette() {
        this.showPalette = !this.showPalette;
    }
}
