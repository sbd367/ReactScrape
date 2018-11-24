const mongoose = require("mongoose");
const Scheema = mongoose.Schema;

const CommentSchema = new Scheema({
    content: [],
    user: {type: Scheema.Types.ObjectId, ref: "Saved"}
})

var comment = mongoose.model("Comment", CommentSchema);

// Export the Article model
module.exports = comment;