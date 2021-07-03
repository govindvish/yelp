import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    getRestaurant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRestaurant = async () => {
    try {
      const res = await RestaurantFinder.get(`/${id}`);
      const data = res.data.data;
      setName(data.name);
      setLocation(data.location);
      setPriceRange(data.price_range);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await RestaurantFinder.put(`/${id}`, {
        name,
        location,
        price_range: priceRange,
      });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='my-5'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => setName(e.target.value)}
            placeholder='Name'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onBlur={(e) => setLocation(e.target.value)}
            placeholder='Location'
            className='form-control'
          />
        </div>
        <div className='form-group'>
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
        <div className='text-center my-3'>
          <button type='submit' className='btn btn-primary'>
            Update Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
