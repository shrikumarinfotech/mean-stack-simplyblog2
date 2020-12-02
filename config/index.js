'use strict';

// import config.json file
const config = require('./config');

// create and export database URI function
module.exports = {
    databaseUri: function(){
        return `mongodb+srv://${config.username}:${config.password}@cluster0.ayprn.mongodb.net/${config.database}?retryWrites=true&w=majority`;
    }
};