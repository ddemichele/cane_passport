/** Setup the Cloudant database, admin user, and index for finding the users for authentication **/

    

exports.initialize = function(req,res){
        var config = require('../config/config.js');

        var Cloudant = require('cloudant')({account:config.cloudant.account, password:config.cloudant.password});
        var bcrypt = require('bcrypt');
        var dbname = config.cloudant.dbname;
        /** constant strings to create the database, admin user, and index field **/
        var dbname = config.cloudant.dbname;
        var admin_user = config.admin_user;
        var admin_pass = config.admin_pass;
        var index_field = config.index_field;
        var hash_pass = bcrypt.hashSync(admin_pass, 10);

        var errstr = '';
        
        // This will delete and recreate the database everytime you run the initialize function
        console.log("Attempting to delete database: " + dbname);

        // Try deleting the database. If 
        Cloudant.db.destroy(dbname, function(err, body) {
            console.log("Setting up the Cloudant database");
            Cloudant.db.create(dbname, function(err, body) {
                if (!err) {
                    console.log("Database " + dbname + " created!");
                    // create the admin user if there wasn't an error creating the DB
                    console.log("Creating a default admin user");
                    var userdb = Cloudant.use(dbname);
                    userdb.insert({ username:admin_user, password:hash_pass }, function(err, body) {
                        if (!err) {
                            console.log("Admin User was created!");
                            //create the index on the username for Cloudant Query
                            var username_idx = {name:'username', type:'json', index:{fields:[index_field]}};
                            userdb.index(username_idx, function(err, body) {
                                if (!err) {
                                    console.log("Index " +index_field+ " was created!");
                                    res.json({ dbname:dbname, admin_user:admin_user, admin_pass:admin_pass, index_field:index_field });
                                } else {
                                    console.log(err.reason);
                                    errstr += err.reason;
                                    res.status(500).send(errstr);
                                }
                            });
                        } else {
                            console.log(err.reason);
                            errstr += err.reason;
                            res.status(500).send(errstr);
                        }
                    });
                } else {
                    res.status(500).send(err.reason);
                }
            });
        }); 
    };
