const db = require('../db');

// @desc    Get all restaurants
// @route   GET /api/v1/restaurants
// @access  Public
exports.getAllRestaurants = async (req, res, next) => {
  try {
    const data = await db.query('SELECT * from restaurants');
    const { rows } = data;
    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error.',
    });
  }
};

// @desc    Get restaurant by ID
// @route   GET /api/v1/restaurants/:id
// @access  Public
exports.getRestaurant = (req, res, next) => {
  res.send('Get restaurant by ID.');
};

// @desc    Add a restaurant.
// @route   POST /api/v1/restaurants
// @access  Public
exports.addRestaurant = (req, res, next) => {
  res.send('Add a restaurant.');
};

// @desc    Update restaurant by ID
// @route   PUT /api/v1/restaurants/:id
// @access  Public
exports.updateRestaurant = (req, res, next) => {
  res.send('Update restaurant by ID.');
};

// @desc    Delete restaurant by ID
// @route   DELETE /api/v1/restaurants/:id
// @access  Public
exports.deleteRestaurant = (req, res, next) => {
  res.send('Delete restaurant by ID.');
};
