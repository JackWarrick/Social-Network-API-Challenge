const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        // It must match this regular expression, which is an email regular expression, explained in my gist: https://gist.github.com/JackWarrick/10354306807f146d87b1661a2e34bf18
    
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }],

    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

//virtual friendCount that gets length of user's friends array

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

//the model is named 'user'

const User = model('user', userSchema);

module.exports = User



// const postSchema = new Schema(
//   {
//     text: String,
//     username: String,
//     comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//     id: false,
//   }
// );


// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.