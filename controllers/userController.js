const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

// Aggregate function to get the number of users overall
const userCount = async () =>
  User.aggregate()
    .count('userCount')
    .then((numberOfUsers) => numberOfUsers);



module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
          userCount: await userCount(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single user
  getSingleUser(req, res) {

//We declare userId in the userRoutes like /:userId, so the computer knows that that is where to look for this id
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
      // If no user
        !user

        // Then throw error
          ? res.status(404).json({ message: 'No user with that ID' })

          // Else respond with json format
          : res.json({
              user
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },


  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },


  // Delete a user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User does not exist' })
          : res.json({message: 'User deleted'})
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },



  // Update a user by the 

  //!! This could be wrong on the $addToSet line
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.studentId },
      { $addToSet: { username: req.body, email: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user with that ID, pal' })
          : res.json(student)
      )
      .catch((err) => res.status(500).json(err));
  },
};
