const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: {
      type:String,
      required: true
    },
    postPhoto: {
      type: String
    },
    userId: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    likes: {
      type: [String],
      default: []
    },
    comments: {
      type: [String],
      default: []
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
  },
  {
    timestamps: true,
  },
);

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;