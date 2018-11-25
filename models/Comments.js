const mongoose = require("mongoose");
const Scheema = mongoose.Schema;

const CommentSchema = new Scheema({
    content: String,
    articleId: {
        type: Scheema.Types.ObjectId,
        ref: "Saved"
    }
})

var Comments = mongoose.model("Comments", CommentSchema);

// Export the Article model
module.exports = Comments;