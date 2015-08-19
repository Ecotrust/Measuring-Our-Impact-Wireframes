## Install
* Install Node and NPM. [Cross platform install how-to](http://blog.nodeknockout.com/post/65463770933/how-to-install-nodejs-and-npm)
* Once that's working...
* Install node dependencies for this project: `$ npm install --global yo gulp bower gulp-jade babel-core gulp-load-plugins browser-sync`
* Have node look for additional missing dependencies: `$ npm install`
* Run `$ bower install` to install frontend dependencies  
* `$ gulp serve` to work on it. It will start a server at http://localhost:9000/ and will watch all of the files. Any changes you make will be compiled (from sass/jade...) and your browser will automatically update to reflect the changes.
* `$ gulp deploy` to push it up to github pages. May bark a bit with warnings but should push ok.

## TODO
* Still need to work out measures with two data sets like ODE VS USDA
* * Add toggle for the dataset
* ~~Add a few success story call outs. Can use a div.panel.panel-{info,danger,warning,prinary} for variation~~
* ~~Panel CSS clean up~~
* ~~Make 'More Info' toggle work~~
* ~~Add a map on Map View toggle~~
* ~~Stub out a few different data vis types and include them at random? Just images or CSS classes.~~
* ~~Use gh-pages to stage wireframes?~~

## Notes
* Widget markup is in /inc/mixins.jade
* Need a quick html->jade? http://html2jade.org (can also use it to debug a block)
* Using this BootSwatch theme: https://bootswatch.com/cosmo/
