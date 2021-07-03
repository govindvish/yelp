import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantsList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory();

  useEffect(() => {
    getRestaurantList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRestaurantList = async () => {
    try {
      const res = await RestaurantFinder.get('/');
      setRestaurants(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    history.push(`/restaurants/${id}/update`);
  };

  return (
    <div className='list-group'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{`$`.repeat(restaurant.price_range)}</td>
                <td>Rating</td>
                <td>
                  <button
                    className='btn btn-warning'
                    onClick={() => handleUpdate(restaurant.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(restaurant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
