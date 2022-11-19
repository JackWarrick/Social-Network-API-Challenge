const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: String,
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toLocaleDateString()
      //Use a getter method to format the timestamp on query
      
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]

  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});


const Thought = model('thought', thoughtSchema)

module.exports = Thought