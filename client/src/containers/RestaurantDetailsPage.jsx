import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RestaurantFinder from '../apis/RestaurantFinder';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import StarRatings from '../components/StarRatings';
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
          <div className='text-center'>
            {selectedRestaurant.restaurant && (
              <>
                <StarRatings
                  rating={selectedRestaurant.restaurant.average_rating}
                />
                <span className='text-warning ml-1'>
                  (
                  {selectedRestaurant.restaurant.count
                    ? selectedRestaurant.restaurant.count
                    : 0}
                  )
                </span>
              </>
            )}
          </div>
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
