'use strict';

// import mongoose
const mongoose = require('mongoose');
// create schema
const Schema = mongoose.Schema;
// setup Schema for posts
const postModel = new Schema({
    title: String,
    body: String,
    category: String,
    createdDate: String,
    modifiedDate: String
});

// setup Posts model with Schema
const Posts = mongoose.model('Posts', postModel);
// export Posts model
module.exports = Posts;