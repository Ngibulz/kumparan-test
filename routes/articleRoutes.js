module.exports = (app) => {
const router = require("express").Router();
const sql = require("./db.js");

//get all article test
router.get('/article', function (req, res) {
sql.query('SELECT * FROM articles ORDER BY created_at DESC', function (error, results, fields) {
if (error) return res.status(400).send("Error");
return res.send({  article: results, message: 'article list.' });
});
});


//Post article
router.post('/article', function (req, res) {
  
  const result = 
    `INSERT INTO articles 
    (id, author_id, title, body,created_at) 
    VALUES 
    (?, ?, ?, ?, ?)`
    
    sql.query(result,[
      req.body.id,req.body.author_id,req.body.title,req.body.body,new Date() , function (error, results, fields) {
        if (error) throw error;
        return res.send({  data: results, message: 'added.' });
        }
    ]);
});

// get by title optional
router.get('/article2/:title', function (req, res) {
  let titles = req.params.title;
  if (!titles) {
  return res.status(400).send({ error: true, message: 'Please provide title' });
  }
  sql.query('SELECT * FROM articles where title=?', titles, function (error, results, fields) {
  if (error) throw error;
  return res.send({ data: results[0], message: 'title' });
  });
  });

  //by author
  router.get('/article/:name', function (req, res) {
    
    let authorname = req.params.name;
    if (!authorname) {
    return res.status(400).send({ error: true, message: 'Please provide Author name' });
    }
    sql.query('SELECT articles.id, articles.title, articles.author_id,articles.body ,authors.name FROM articles INNER JOIN authors ON articles.author_id = authors.id WHERE authors.name= ? ', authorname, function (error, results, fields) {
    if (error) throw error;
    return res.send({ data: results, message: 'author article' });
    });
    });
app.use("/api", router);
}
