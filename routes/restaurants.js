const express = require('express');
const router = express.Router();
const {
  getAllRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurants.controller');

router.route('/').get(getAllRestaurants).post(addRestaurant);
router
  .route('/:id')
  .get(getRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

module.exports = router;
