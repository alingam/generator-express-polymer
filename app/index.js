'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var slugify = require('underscore.string/slugify');
var mkdirp = require('mkdirp');


function ExpressPolymerGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.slugify = slugify;

    this.argument('appname', {
        desc: 'create an express-app with name [appname]',
        type: Boolean,
        required: false,
        defaults: path.basename(process.cwd())
    });

    this.on('end', function () {
        if(!this.options['skip-install']) {
            this.installDependencies({npm : true, bower : true});
        }
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ExpressPolymerGenerator, yeoman.generators.Base);


ExpressPolymerGenerator.prototype.askFor = function () {
    var cb = this.async(),
        root = this;

    this.log(yosay('Welcome to the marvelous ExpressPolymer generator!'));

    var prompts = [
    {
        type: 'list',
        name: 'styles',
        message: 'less is used, select if you want to change to css',
        default: 'less',
        choices: ['less', 'css']
    },
    {
        type: 'confirm',
        name: 'mvc',
        message: 'Do you want an mvc express app',
        default:  false
    }
    ];

    var answersCallback = (function (answers) {
        this.options.mvc = answers.mvc;
        this.expressVersion = '4.x';
        this.cssExt = answers.styles;
        this.buildToolLanguage='js';
        if(answers.styles=='less'){
            this.cssPreprocessor=answers.styles;
        }
        this.viewEngine = 'jade';
        this.buildTool = 'grunt';
        cb();
    }).bind(this);
    this.prompt(prompts, answersCallback);
  };

ExpressPolymerGenerator.prototype.basicSetup = function () {
    mkdirp.sync('public');
    mkdirp.sync('public/' + this.cssPreprocessor);
    mkdirp.sync('public/vendor');
    mkdirp.sync('public/img');
    mkdirp.sync('public/css');
    mkdirp.sync('public/js');

    this.template('styles.css', 'public/' + this.cssPreprocessor + '/styles.' + this.cssExt);
    this.copy('main.js', 'public/js/main.js');
};

ExpressPolymerGenerator.prototype.setupApp = function () {
    var prefix = 'templates/express4/';

    if (this.options.mvc) {
        this.sourceRoot(path.join(__dirname,  prefix + 'mvc'));
        this.directory('.', '.');
    } else {
        this.sourceRoot(path.join(__dirname,  prefix + 'basic'));
        this.directory('.', '.');
    }
};
ExpressPolymerGenerator.prototype.changeDir = function () {
    this.sourceRoot(path.join(__dirname, 'templates', 'common'));
};

ExpressPolymerGenerator.prototype.writeBowerJSONFile = function () {
    this.template('.bower.json', 'bower.json');
};

ExpressPolymerGenerator.prototype.projectfiles = function () {
    ['.bowerrc', '.editorconfig', '.gitignore', '.jshintrc'].forEach(function (file) {
        this.copy(file === '.gitignore' ? 'gitignore' : file, file);
    }, this);
};

ExpressPolymerGenerator.prototype.writePackageJSONFile = function () {
    this.template('.package.json', 'package.json');
};

ExpressPolymerGenerator.prototype.writeBuildFile = function () {
    var buildFile = 'Gruntfile.'+ this.buildToolLanguage;

    this.sourceRoot(path.join(__dirname, 'templates/' + this.buildTool + 'files'));

    if (this.buildTool === 'grunt') {
        this.template(buildFile, buildFile);
    }
};



module.exports = ExpressPolymerGenerator;
