#Cloudant Angular Node Express with Bootstrap

I searched around for a project that demonstrated using Cloudant and Node with authentication.  I could only find examples using Mongo and Passport JS, so this is a modification of a project that demonstrates using the new [Cloudant Node library](https://github.com/cloudant/nodejs-cloudant).

Forked from [mancioshell/NodeJS-ExpresJS-MongoDB-AngularJS-Bootstrap-NotyJS-seed](https://github.com/mancioshell/NodeJS-ExpresJS-MongoDB-AngularJS-Bootstrap-NotyJS-seed) and spiced with [Twitter Bootstrap](https://github.com/twitter/bootstrap). 

Start an awesome app with AngularJS + Bootstrap on the front, Cloudant + Express + Node on the back. This project is an
application skeleton for a typical [AngularJS](http://angularjs.org/) web app for those who want
to use Node to serve their app with the new Cloudant Node Library.

The seed contains angular libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball) and
you're ready to develop your application.

The seed app shows how to wire together Angular client-side components with Express on the server.
It also illustrates writing angular partials/views with EJS.


## How to use Cloudant-angular-node-express seed application

Clone the Cloudant-angular-node-express-seed repository.

    run `npm install` to grab the dependencies  
    run `bower install` to grab the static file dependencies

### Initializing the application

If you don't have a Cloudant account you need to create a new one at [Cloudant](http://www.cloudant.com).  You'll then need to modify the `config.js` file with the account information:

    config.cloudant.account = "yourusername"
    config.cloudant.password = "yourpassword"

Once you start the application, you will need to setup the application by navigating to a setup URL and create the database, admin user, and Cloudant Query index on the username:

    http://localhost:3000/setup

### Running the app

Runs like a typical express app:

    node app.js

Once you've run the setup function, you can login as the admin user or create a new user by clicking on the Reigster link.

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.


## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    bower.json          --> for static JS files
    public/             --> all of the files to be used in on the client side
      bootstrap/        --> all bootstrap files
        css/
        img/
        js/
      css/              --> css files
        app.css         --> default stylesheet
        bootstrap_custom.css      --> custom stylesheet
      img/              --> image files
        cloudant_ibm.png          --> Banner image
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        
    routes/
      api.js            --> route for serving JSON, contains MongoDB configuration
      routes.js         --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app
      setup.html        --> setup page for creating a DB
      webapp.html       --> session authenticated page
      partials/         --> angular view partials (partial jade templates)
        home.html
        login.html
        register.html
