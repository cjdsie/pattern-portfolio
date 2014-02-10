##A Living Document of Responsive Deliverables

Inspired by the recent movement of creating systems, not pages. This is a living library of deliverables that can be stylized to fit your next project. Each pattern is included within the pattern directory and can be optionally included into the final guide. 

### Quick Start

Clone the git repo - `git clone git://github.com/cjdsie/pattern-portfolio.git` or [download it](https://github.com/cjdsie/pattern-portfolio/zipball/master)

This framework using Node.js, NPM (Node Package Manager), and Grunt.js to manage the code in this repo. To preview code locally, you'll need to install Node and NPM, then run the following commands from a terminal window, in the repo directory: 

``` bash
 $ npm install
 $ grunt
```

Those commands do the following:

- `npm install` will install the necessary node.js packages to develop on this project
- `grunt` will run a series of tasks defined in `Gruntfile.js`, such as concatenating or minifying CSS and JavaScript.

Once you have done all this, you can preview the site by starting a web server at the `localhost:8080`. In the same terminal window:

``` bash
  $ node server
```

I have set up a `watch` task to automatically rebuild the `views` and `public` files whenever files are changed. When you start working, just run the following commands to run all tasks and then start the watch task:

``` bash
$ grunt && grunt watch
``` 

#### Adding Patterns

All patterns are separate HTML files that live in /views/patterns. Ideally, the file name should be the same as the pattern's main class name. Add a file to see it in the library then include it in the main `index.html`.

For all presentation styles, we are using `.scss` partials. Our gruntfile will combine the partials into a single CSS file. 

## Feature Requests

If you have an idea for a new feature or a suggestion how to improve an existing feature, let me know! [Open a new issue](https://github.com/cjdsie/pattern-portfolio/issues/new) to describe your request.
  

### Submitting an Issue

We use the [GitHub issue tracker](https://github.com/cjdsie/pattern-portfolio/issues/) to track bugs and features. Before submitting a bug report or feature request, check to make sure it hasn't already been submitted. You can indicate support for an existing issue by voting it up. When submitting a bug report, please include a screenshot and any additional details that can help us debug, such as your operating system and browser version.

### Licence

This work is available under the [MIT license](http://chrisdasie.mit-license.org).