import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailsPage = (props) => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    getRestaurant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRestaurant = async () => {
    try {
      const res = await RestaurantFinder.get(`/${id}`);
      setSelectedRestaurant(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className='text-center'>
        {selectedRestaurant && selectedRestaurant.name}
      </h1>
    </div>
  );
};

export default RestaurantDetailsPage;
