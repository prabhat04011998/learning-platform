const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');const dotenv = require("dotenv");
require('dotenv').config()
dotenv.config();

const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var port = process.env.PORT || 5000;

require('./config/database')

var Api = require('./api/api')

app.use('/api', Api)

 

  app.listen(port, function() {
    console.log('Server is running on port: ' + port)
  });