var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var Pool = require('pg').Pool;

var config = {
    
    host: 'db.imad.hasura-app.io',
    user: 'rcrchit',
    database: 'rcrchit',
    port: '5432',
    password: process.env.DB_PASSWORD
}

var pool = new Pool(config);

app.get('/user-db', function(req,res){
    pool.query('SELECT * FROM "user"',function(err,result) {
     if(err) {
         res.status(500).send(err.toString());
         }
         else {
             res.send(JSON.stringify(result.rows));
         }
    });
});




var articles = {
    'article-one' : {
    title : 'Article one of RCR',
    heading : 'Article one',
    date : 'sep14,2017',
    content : `
    <p>
    This is content of my first article.  This is content of my first article.  This is content of my first article.
      This is content of my first article.  This is content of my first article.
      </p>
      <p>
        This is content of my first article.  This is content of my first article.  This is content of my first article.
          This is content of my first article.  This is content of my first article.
          </p>
          <p>
            This is content of my first article.  This is content of my first article.  This is content of my first article.
              This is content of my first article.  This is content of my first article.
              </p>`
              },
              'article-two' : {
                title : 'Article two of RCR',
                heading : 'Article two',
                date : 'sep11,2017',
                content : 
                `<p>
                This is content of my second article.
                </p>`
              },
              'article-three' : {
                title : 'Article three of RCR',
                heading : 'Article three',
                date : 'sep9,2017',
                content : 
                `<p>
                This is content of my third article.
                </p>`
              }
};

                function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate= `
<html>
<head>
    <title>
        ${title}
    </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
            <h3>
            ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
         ${content}
        </div>
    </div>
    </body>
    </html>
    `;
    return htmlTemplate;
    }

app.get('/:articleName',function (req,res) {
    var articleName = req.query.articleName;
    res.send(createTemplate(articles[articleName]));
    });
 app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


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
