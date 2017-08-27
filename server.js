var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = new Pool(config);
var pool = require('pg').pool;

var config = {
    
    host: 'db.imad.hasura-app.io',
    user: 'rcrchit',
    password: 'db-rcrchit-24123',
    database: 'rcrchit',
    port: '5432',
}


app.get('/test-db'), function(req,res){
    pool.query('SELECT * FROM user',function(err,res) {
     if(err) {
         res.status(500).send(err.toString());
         }
         else {
             res.send(JSON.stringify(result));
         }
    });
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/article1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
});

app.get('/ui/article2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/ui/article3.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/my-app.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'my-app.png'));
});

app.get('/ui/b10.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'b10.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
