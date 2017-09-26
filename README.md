
# ngx-color-selector # 

![](https://travis-ci.org/bytelabsco/ngx-color-selector.svg?branch=master) ![](https://badge.fury.io/js/%40bytelabsco%2Fngx-color-selector.svg)

**ngx-color-selector** provides a simple interface for selecting from a predefined set of colors.

![](https://github.com/bytelabsco/ngx-color-selector/raw/master/docs/ngx-color-selector-example.gif)


## Demo

Clone the repository and run

	npm install    
	npm run playground

then navigate in a browser to

    http://localhost:3000


## Installation

    npm install --save @bytelabsco/ngx-color-selector


## Getting Started

Import the `BytelabsColorSelectorModule` in your application module:

	import { NgModule } from '@angular/core';

	// ... Other imports

	import { BytelabsColorSelectorModule } from '@bytelabsco/ngx-color-selector';

	@NgModule({
		imports: [
		// ...
		BytelabsColorSelectorModule
		],
		/...
	})
	export class AppModule {}

In your component, set up a variable to store your color:

	import { Component } from '@angular/core';

	import { IColor } from '@bytelabsco/ngx-color-selector';

	@Component({
  		selector: 'app-root',
  		templateUrl: './app.component.html',
  		styleUrls: ['./app.component.css']
	})
	export class AppComponent {

  		public currentColor: IColor = {
    		hex: "#000"
  		}
	}

In your template, use the component:

	<bytelabs-color-selector [(color)]="currentColor"></bytelabs-color-selector>


## Options


The following options are defined in `IColorSelectorConfig` and a basic implementation is provided in `ColorSelectorConfig` using reasonable defaults from the constant `COLOR_SELECTOR_CONFIG_DEFAULTS`.  Those can all be found in the [color-selector-config.ts](https://github.com/bytelabsco/ngx-color-selector/blob/master/src/color-selector/color-selector-config.ts) file.

| Option    | Type                    | Default                 | Description |
| --------- | ----------------------- | ----------------------- | ----------- |
| palette   | IColor[]                | [Flat Colors](http://htmlcolorcodes.com/color-chart/flat-design-color-chart/) | An array of predefined IColor objects to display on the palette.  Some pre-made collections using colors from htmlcolorcodes.com are provided. |
| direction | PaletteDirection (enum) | Columns (1)             | Direction to fill the color palette, either rows first or columns first |
| itemSize  | ISwatchSize             | {height: 20, width: 20} | Size of each swatch on the palette, and used for the preview color |
| itemsPer  | number                  | 10                      | Number of items to display before moving to the next row or column |
| position  | PalettePosition (enum)  | BottomRight (3)         | Position to place the palette, relative to the preview color, when displayed |


### PaletteDirection Enum

	Rows,					// 0
	Columns					// 1


### PalettePosition Enum

	TopLeft,				// 0
	TopRight,				// 1
	BottomLeft;				// 2
	BottomRight				// 3



## Overriding Defaults


The default options can be overridden, either globally, or on a per instance basis.


### Globally

Create, or use a pre-existing, file to keep settings in, and specify the options you wish to override in a const.  You do not have to override all options.
	
	export const MY_COLOR_SELECTOR_SETTINGS {
		palette = [{hex: "#000"}, {hex: "#FFF"}]
		// ...
	} 

Import those settings, in your app module, and provide them to the module.

	import { NgModule } from '@angular/core';

	// ... Other imports

	import { BytelabsColorSelectorModule, ColorSelectorConfig } from '@bytelabsco/ngx-color-selector';

	import { MY_COLOR_SELECTOR_SETTINGS } from '../settings/my-settings';

	@NgModule({
		imports: [
		// ...
		BytelabsColorSelectorModule.forRoot(new ColorSelectorConfig((MY_COLOR_SELECTOR_SETTINGS));
	})
	export class AppModule {}


### Per Use

In your component you can create a variable to hold your custom options, or you can provide them directly to the component in your template:

	import { Component } from '@angular/core';

	import { IColor, PalettePosition } from '@bytelabsco/ngx-color-selector';

	@Component({
  		selector: 'app-root',
  		templateUrl: './app.component.html',
  		styleUrls: ['./app.component.css']
	})
	export class AppComponent {

		// You can just provide an object containing the options you want to override
  		public colorSelectorOptions = {
    		position: PalettePosition.BottomLeft
  		};

  		public currentColor: IColor = {
    		hex: "#000"
  		}
	}

In your template, pass your option overrides with the component:

	<bytelabs-color-selector [(color)]="currentColor" [options]="colorSelectorOptions" ></bytelabs-color-selector>

Or just provide your overrides in the template:

	<bytelabs-color-selector [(color)]="currentColor" [options]="{itemsPer: 5}" ></bytelabs-color-selector>


## Credits

[jvandemo/generator-angular2-library](https://github.com/jvandemo/generator-angular2-library) for their excellent Angular2 Library Yeoman Generator

[HTMLColorCodes.com](http://htmlcolorcodes.com) for the pre-made [color charts](http://htmlcolorcodes.com/color-chart/).

Shout-out to [scoutzfiction](https://github.com/scoutzfiction)


## LICENSE

This project is licensed under the MIT license.  Se the [LICENSE](https://github.com/bytelabsco/ngx-color-selector/blob/master/LICENSE) for more info.