'use strict';

// import body-parser
const bodyParser = require('body-parser');

// import date-formatter
const dateFormatter = require('../public/javascripts/date-formatter-v1.0.0');

// import User model
const Users = require('../models/userModel'); //TOBEDONE
// import Post model
const Posts = require('../models/postModel');

// export express app function
module.exports = function(app){
    // setup body-parser JSON
    const jsonParser = bodyParser.json();
    // setup bodu-parser urlEncodedParser
    const urlEncodedParser = bodyParser.urlencoded({ extended: false });

    // setup GET method for read points
    app.get('/api/posts', jsonParser, function(req, res){
        Posts.find({}, function(err, data){
            if(err) throw err;
            res.send(data);
        });
    });

    // setup GET method for one single post
    app.get('/api/post/:id', urlEncodedParser, function(req, res){
        if(req.params.id){
            Posts.findById(req.params.id, function(err, data){
                if(err) throw err;
                res.send(data);
            });
        }
    });

    // setup GET method to retrieve data of a single category
    app.get('/api/category/:category', urlEncodedParser, function(req, res){
        if(req.params.category){
            Posts.find({category: req.params.category}, function(err, data){
                if(err) throw err;
                res.send(data);
            });
        }
    });

    // setup POST method to add new post
    app.post('/api/post/new', jsonParser, function(req, res){
        // create new post
        const newPost = Posts({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category,
            createdDate: dateFormatter('DD-MM-YY-TIME')
        });

        // save new post
        newPost.save(function(err){
            if(err) throw err;
            res.send('New Post Added');
        });

    });
}

