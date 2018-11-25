const express = require("express");
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');
const mongojs = require('mongojs');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = require('./models');

var result =[]

// Define API routes here
app.get("/getSome", (req, res) => {
  axios.get("https://www.foxnews.com/category/us/us-regions/midwest").then( response =>{
      
    var $ = cheerio.load(response.data);

    $('h4.title').each( (i, element) => {
      result.push({
        Headline: $(element)
        .children('a')
        .text(),

        URL: $(element)
        .children('a')
        .attr('href'),

        Summary: $(element)
        .parent()
        .parent()
        .children("div.content")
        .children().children().text(),
      })   
    });
      
    db.NYT_articles.create(result, (err, data) => {
      if (err) return err;
      console.log(data)
    })
 


    db.NYT_articles.find({}, (err, data) => {
      if (err) return err;
      console.log(data)
    })

  })
  res.end();
})

app.get("/getArticles", function(req, res){

  db.NYT_articles.find({}, (err, data) => {
      if(err) console.log("this");
      else res.json(data)
  }) 
});

app.get("/resetArticles", function(req, res){

  db.NYT_articles.deleteMany({}, (err, data)=>{
      if(err) console.log(err)
      else res.json(data)
  })
});

app.get("/deleteArticle/:id", function(req, res){

  db.NYT_articles.find({_id: mongojs.ObjectId(req.params.id)}, (err, data) => {
      if(err) console.log(err);
      else res.json(data)
  }) 
});

app.get("/getSaved", function(req, res){

  db.Saved_Articles.find({"deleted": false}, (err, data) => {
      if(err) console.log(err);
      else res.json(data)
  }) 
});

app.post("/addSaved", function(req, res){
  db.Saved_Articles.create(req.body)
});

// app.get("/comments/:id")

app.post("/addComment", function(req, res){
  console.log(req.body)
    db.Comments.create({
      content: req.body.content,
      articleId: mongojs.ObjectID(req.body.articleId)
    }).then(dbComment => db.Saved_Articles.findOneAndUpdate({_id: dbComment.articleId}, {$push:{ Comments: dbComment._id }}, {new: true}))
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.json(err))
})

app.get("/getComments/:id", function(req, res){
  db.Comments.find({articleId: mongojs.ObjectID(req.params.id)})
  .populate("Comment")
  .then(dbSaved => res.json(dbSaved))
  .catch(err => res.json(err))
})

app.get("/deleteSaved/:id", function(req, res){

  db.Saved_Articles.updateOne({_id: mongojs.ObjectID(req.params.id)}, {$set:{"deleted": true}}, (err, data) =>{
      console.log(data)
  })
  res.end();
})
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
