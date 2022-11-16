const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

//require the thoughtController where the functionality is

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:studentId/assignments
router.route('/:thoughtId/reactions').post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
