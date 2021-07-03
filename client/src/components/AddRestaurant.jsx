import React, { useContext, useState } from 'react';

import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const { addRestaurants } = useContext(RestaurantsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post('/', {
        name,
        location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data);
      setName('');
      setLocation('');
      setPriceRange('');
    } catch (err) {}
  };

  return (
    <div className='mb-4'>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='col'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) => setName(e.target.value)}
              placeholder='Name'
              className='form-control'
            />
          </div>
          <div className='col'>
            <input
              type='text'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onBlur={(e) => setLocation(e.target.value)}
              placeholder='Location'
              className='form-control'
            />
          </div>
          <div className='col'>
            <select
              className='custom-select mr-sm-2'
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              onBlur={(e) => setPriceRange(e.target.value)}
            >
              <option disabled value=''>
                Price Range
              </option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
              <option value='5'>$$$$$</option>
            </select>
          </div>
        </div>
        <div className='text-center my-3'>
          <button type='submit' className='btn btn-primary'>
            Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
