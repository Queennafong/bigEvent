const cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();
app.listen(3007,()=>{'server is running~~'});

app.use(cors());
app.use(express.urlencoded({extended:false}));

app.use('/api',require(path.join(__dirname,'/router','api')));
app.use('/my',require(path.join(__dirname,'/router','user')));
app.use('/my/article',require(path.join(__dirname,'/router','article')));
app.use('/my/article',require(path.join(__dirname,'/router','category')));
