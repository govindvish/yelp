const express = require('express');
const router = express.Router();
const {
  getAllRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  addReview,
} = require('../controllers/restaurants.controller');

router.route('/').get(getAllRestaurants).post(addRestaurant);
router
  .route('/:id')
  .get(getRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);
router.route('/:id/addReview').post(addReview);

module.exports = router;
