import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RestaurantFinder from '../apis/RestaurantFinder';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
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
      {selectedRestaurant && (
        <>
          <div className='mt-3'>
            <Reviews />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
