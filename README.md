# {{jade}} [![NPM version](https://badge.fury.io/js/helper-jade.png)](http://badge.fury.io/js/helper-jade)

> A Handlebars helper for converting Jade to HTML.

## Quickstart
In the root of your project, run the following in the command line:

```bash
npm i helper-jade --save
```

## Usage

```handlebars
{{jade "path/to/file.jade"}}
```

## Options

### task options
Options can be set in your Gruntfile, in the `jade` object in the Assemble task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      jade: {
        pretty: true
      }
    }
    ...
  }
});
```

## Author

+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
+ [github/jonschlinkert](http://github.com/jonschlinkert)


## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.