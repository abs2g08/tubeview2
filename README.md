# Tubeview2

Tubeview2 is a basic Youtube client written in Angular.js.

Currently it is possible to:

* Search for videos using query string
* Paginate matching results
* Create multiple tabs
* Play videos

## Features

* Scafolded using [Yeoman](http://yeoman.io/)
* Built using Angular.js
* Sass/Compass integration
* Custom Svg loader and css animations 
* Multi Language support
* Customized bootstrap theme
* Bower/Node package management

## Prerequisites

* [Git](http://git-scm.com/)
* [Node.js@0.12.9](http://nodejs.org/)
* [n](https://www.npmjs.com/package/n)
* [grunt-cli](https://www.npmjs.com/package/grunt-cli)

## Running

Add your own Youtube API keys to config.js

* `n 0.12.9` 
* `npm install` (May produce warnings due to old project)
* `bower install`
* `npm build` for building and `npm start` for preview.

## Screenshot

![Search](http://i.imgur.com/peSsFdL.png?1)

## Testing

Running `grunt test` will run the unit tests with karma.
