const express = require('express');
const admin = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Admin = require('../../models/admin');


process.env.SECRET_KEY = 'secret'

admin.get('/any',async (req,res) => {
    res.send('admin')
})



module.exports = admin