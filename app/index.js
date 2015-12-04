'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


function ExpressReactGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('appname', {
        desc: 'create an express-app with name [appname]',
        type: Boolean,
        required: false,
        defaults: path.basename(process.cwd())
    });

    this.on('end', function () {
        this.installDependencies({skipInstall: options['skip-install']});
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ExpressReactGenerator, yeoman.generators.Base);


ExpressReactGenerator.prototype.askFor = function () {
    var cb = this.async(),
        root = this;

    this.log(yosay('Welcome to the marvelous ExpressReact generator!'));

    var prompts = [
    {
        type: 'list',
        name: 'viewEngine',
        message: 'ejs templates are being used, select if you want to change to jade',
        default: 'ejs',
        choices: ['ejs', 'jade']
    },
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
        this.viewEngine = answers.viewEngine;
        this.buildTool = 'grunt';
        cb();
    }).bind(this);
    this.prompt(prompts, answersCallback);
  };

ExpressReactGenerator.prototype.basicSetup = function () {
    this.mkdir('public');
    this.mkdir('public/' + this.cssPreprocessor);
    this.mkdir('public/vendor');
    this.mkdir('public/img');
    this.mkdir('public/css');
    this.mkdir('public/js');

    this.template('styles.css', 'public/' + this.cssPreprocessor + '/styles.' + this.cssExt);
    this.copy('main.js', 'public/js/main.js');
};

ExpressReactGenerator.prototype.setupApp = function () {
    var prefix = 'templates/express4/';

    if (this.options.mvc) {
        this.sourceRoot(path.join(__dirname,  prefix + 'mvc'));
        this.directory('.', '.');
    } else {
        this.sourceRoot(path.join(__dirname,  prefix + 'basic'));
        this.directory('.', '.');
    }
};
ExpressReactGenerator.prototype.changeDir = function () {
    this.sourceRoot(path.join(__dirname, 'templates', 'common'));
};

ExpressReactGenerator.prototype.writeBowerJSONFile = function () {
    this.template('.bower.json', 'bower.json');
};

ExpressReactGenerator.prototype.projectfiles = function () {
    ['.bowerrc', '.editorconfig', '.gitignore', '.jshintrc'].forEach(function (file) {
        this.copy(file === '.gitignore' ? 'gitignore' : file, file);
    }, this);
};

ExpressReactGenerator.prototype.writePackageJSONFile = function () {
    this.template('.package.json', 'package.json');
};

ExpressReactGenerator.prototype.writeBuildFile = function () {
    var buildFile = 'Gruntfile.'+ this.buildToolLanguage;

    this.sourceRoot(path.join(__dirname, 'templates/' + this.buildTool + 'files'));

    if (this.buildTool === 'grunt') {
        this.template(buildFile, buildFile);
    }
};



module.exports = ExpressReactGenerator;