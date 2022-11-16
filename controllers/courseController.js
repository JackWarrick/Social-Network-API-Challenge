const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      // .then((courses) => res.json(courses))
      // .catch((err) => res.status(500).json(err));
  },
  // Get all thoughts
  getThoughts(req, res) {
    User.find()
      // .then((courses) => res.json(courses))
      // .catch((err) => res.status(500).json(err));
  },
};
