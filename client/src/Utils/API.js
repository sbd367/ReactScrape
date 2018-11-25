import axios from "axios";

export default {
    // Gets all books
    getArticles: function() {
      return axios.get("/getArticles");
    },
    // Gets the book with the given id
    getSome: function() {
      return axios.get("/getSome");
    },
    // Deletes all scraped data to clear the page
    deleteArticles: function() {
      return axios.get("/resetArticles");
    },
    deleteOne: function(id) {
      return axios.get("/deleteArticle/"+ id)
    },
    // Saves a book to the database
    saveArticle: function(articleData) {
      return axios.post("/addSaved/", articleData);
    },
    getSaved: function(){
        return axios.get("/getSaved");
    },
    deleteSaved: function(id) {
        return axios.get("/deleteSaved/" + id)
    },
    addComment: function(comment){
        return axios.post("/addComment/", comment)
    },
    getComments: function(id){
      return axios.get("/getComments/" + id);
    }

  };