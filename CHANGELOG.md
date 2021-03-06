## [1.0.1](https://github.com/LCluber/Wee.js/compare/v1.0.0...v1.0.1) (2020-01-04)


### Bug Fixes

* **dependencies:** update chjs dependency ([4d8e92c](https://github.com/LCluber/Wee.js/commit/4d8e92cc9152cbf4db6f3a37fc0cf505e9fbdc4f))

# [1.0.0](https://github.com/LCluber/Wee.js/compare/v0.3.2...v1.0.0) (2019-08-17)


### Features

* **string:** dropped string and file classes ([02f28b1](https://github.com/LCluber/Wee.js/commit/02f28b1))


### BREAKING CHANGES

* **string:** dropped string and file classes

## [0.3.2](https://github.com/LCluber/Wee.js/compare/v0.3.1...v0.3.2) (2019-08-16)


### Bug Fixes

* **dependencies:** updated dependencies ([3b25029](https://github.com/LCluber/Wee.js/commit/3b25029))

## [0.3.1](https://github.com/LCluber/Wee.js/compare/v0.3.0...v0.3.1) (2019-07-22)


### Bug Fixes

* **binding:** when property parameter length = 1 ([6a01aa7](https://github.com/LCluber/Wee.js/commit/6a01aa7))

## Version 0.3.0 (June 30th 2019)

- Removed sound, image and file loaders

## Version 0.2.14 (June 29th 2019)

- Updated Mouette logger for log groups management

## Version 0.2.13 (June 19th 2019)

- Binding Constructor now accepts id string | class string | HTMLElement | array of HTMLElements as element parameter

## Version 0.2.12 (June 14th 2019)

- Updated update() method in Binding class

## Version 0.2.11 (June 12th 2019)

- Binding automatically detects wether to display text or HTML

## Version 0.2.10 (June 09th 2019)

- Bind class is now called Binding

## Version 0.2.9 (June 08th 2019)

- Updated Bind class with better one-way data binding

## Version 0.2.8 (May 18th 2019)

- Updated API Reference in README.md

## Version 0.2.7 (March 31th 2019)

- fixed declaration file

## Version 0.2.6 (March 14th 2019)

- Improved typings

## Version 0.2.5 (March 11th 2019)

- Added styleElement() method
- showById(), hideById(), clearInputValue() and focusOn() methods now returns the HTMLElement
- Dom methods now accept the id name or the HTMLElement as parameter

## Version 0.2.4 (March 06th 2019)

- added findByClass() and findByTag() methods into Dom class

## Version 0.2.3 (March 02nd 2019)

- added clearHTMLElement() method into Dom class
- added scrollToTop() method into Dom class

## Version 0.2.2 (January 04th 2019)

- childElementAttributes parameter of addHTMLElement() method in Dom class accepts more attributes

## Version 0.2.1 (December 24th 2018)

- Updated Mouette.js dependency to version 0.2.8
- Updated Aias.js dependency to version 0.1.9

## Version 0.2.0 (December 23th 2018)

- Deleted Check class to give it its own library Ch.js

## Version 0.1.17 (December 07th 2018)

- Added logs with Mouette.js

## Version 0.1.16 (December 2nd 2018)

- Added isString method to Check class

## Version 0.1.15 (December 1st 2018)

- Updated isObject, isJSON and isFunction parameter type to any

## Version 0.1.14 (November 30th 2018)

- Updated isObject method in Check class

## Version 0.1.13 (November 29th 2018)

- Ajax class deleted
- Ajax requests done via Aias.js

## Version 0.1.12 (November 11th 2018)

- Updated addHTMLElement with innerHTML property in Dom Class

## Version 0.1.11 (November 07th 2018)

- Updated Ajax Class with all HTTP request methods

## Version 0.1.10 (October 07th 2018)

- fix declaration file

## Version 0.1.9 (October 06th 2018)

- Wee.js published on NPM at @lcluber/weejs.
- Updated README.md with NPM installation procedure.

## Version 0.1.8 (August 30th 2018)

- Changed child element option content by textContent in Wee.Dom.addHTMLElement()

## Version 0.1.7 (July 14th 2018)

- The library is dockerized and can be used as a container.
- added typings directory into package.json

## Version 0.1.6 (June 19th 2018)

- Documentation automatically generated in /doc folder
- Typedoc and grunt-typedoc added in devDependencies
- New "typedoc" task in Gruntfile.js
- Typescript upgraded to version 2.9.2

## Version 0.1.5 (June 16th 2018)

- Library exported as ES6 and IIFE modules instead of UMD.
- WEE namespace becomes Wee

## Version 0.1.4 (June 08th 2018)

- New methods for Dom class: addHTMLElement, getInputValue, clearInputValue, focusOn

## Version 0.1.3 (May 13th 2018)

- New bind class for data binding.
- New file class for file name and path Utils.
- New img and sound class for images and audio loading.

## Version 0.1.2 (April 29th 2018)

- New ajax class with promises.

## Version 0.1.1 (April 28th 2018)

- Some methods have been moved to more relevant classes.

## Version 0.1.0 (April 23rd 2018)

- Initial version
