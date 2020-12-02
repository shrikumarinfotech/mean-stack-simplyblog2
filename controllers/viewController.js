'use strict';

module.exports = function(app){
    // use GET method to render view posts
    app.get('/posts', function(req, res){
        res.render('posts');
    });

    // use GET method to render single post view template
    app.get('/single-post', function(req, res){
        res.render('post');
    });

    // use GET method to render single post view template: with id
    app.get('/post/:id', function(req, res){
        res.render('single-post');
    });

    // use GET method to render category template
    app.get('/category', function(req, res){
        res.render('category-template');
    });

    // use GET method to render add post template
    app.get('/add-post', function(req, res){
        res.render('add-post');
    });
};