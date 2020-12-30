const db = require('../db');

// @desc    Get all restaurants
// @route   GET /api/v1/restaurants
// @access  Public
exports.getAllRestaurants = async (req, res, next) => {
  try {
    const data = await db.query('SELECT * from restaurants');
    const { rows } = data;
    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error.',
    });
  }
};

// @desc    Get restaurant by ID
// @route   GET /api/v1/restaurants/:id
// @access  Public
exports.getRestaurant = async (req, res, next) => {
  try {
    const data = await db.query(
      `SELECT * from restaurants where id=${req.params.id}`
    );
    const { rows } = data;

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        data: rows,
      });
    }

    return res.status(200).json({
      success: true,
      data: rows && rows[0],
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error.',
    });
  }
};

// @desc    Add a restaurant.
// @route   POST /api/v1/restaurants
// @access  Public
exports.addRestaurant = async (req, res, next) => {
  try {
    const data = await db.query(
      `INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *`,
      [req.body.name, req.body.location, req.body.price_range]
    );
    const { rows } = data;
    return res.status(201).json({
      success: true,
      data: rows && rows[0],
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error.',
    });
  }
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
