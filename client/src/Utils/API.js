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
    // Deletes the book with the given id
    deleteArticles: function() {
      return axios.get("/resetArticles");
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
        return axios.post("/addComment/" + comment)
    }

  };