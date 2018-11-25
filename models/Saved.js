var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var SavedSchema = new Schema({

    Headline:{
        type: String,
        required: true
    },

    Summary:{
        type: String,
        required: true
    },

    URL:{
        type: String,
        required: true
    },

    Comments:[{
        type: Schema.Types.ObjectId, 
        ref: "Comments"
    }],

    deleted:{
        type: Boolean,
        default: false
    }
});

var Saved = mongoose.model("Saved", SavedSchema);

// Export the Article model
module.exports = Saved;