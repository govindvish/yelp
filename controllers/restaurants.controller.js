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

    const reviews = await db.query(
      `SELECT * from reviews where restaurant_id=${req.params.id}`
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        data: rows,
      });
    }

    return res.status(200).json({
      success: true,
      data: rows && rows[0],
      reviews: reviews.rows,
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
exports.updateRestaurant = async (req, res, next) => {
  try {
    const data = await db.query(
      `UPDATE restaurants SET name=$1, location=$2, price_range=$3 where id=$4 returning *`,
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    const { rows } = data;
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

// @desc    Delete restaurant by ID
// @route   DELETE /api/v1/restaurants/:id
// @access  Public
exports.deleteRestaurant = async (req, res, next) => {
  try {
    const data = await db.query(`DELETE from restaurants where id=$1`, [
      req.params.id,
    ]);
    const { rows } = data;

    return res.status(204).json({
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
