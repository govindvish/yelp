import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RestaurantFinder from '../apis/RestaurantFinder';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailsPage = (props) => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);
  const [reRenderDetails, setReRenderDetails] = useState(false);

  useEffect(() => {
    getRestaurant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRenderDetails]);

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
          <h1 className='text-center display-1'>
            {selectedRestaurant.restaurant &&
              selectedRestaurant.restaurant.name}
          </h1>
          <div className='mt-3'>
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview setReRenderDetails={setReRenderDetails} />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
