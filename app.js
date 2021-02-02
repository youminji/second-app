const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.get('/',(req,res) => res.send('Hello, Nodejs! code update, heroku testing'));
app.get('/welcome', (req,res) => res.send('Hi, there. welcome to the Nodejs service.'));
app.get('/check', (req,res) => res.send('Example app listening on port 3000'));
app.listen(port,()=>console.log('Example app listening on port 3000'))