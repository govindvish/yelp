import React, { useState } from 'react';

const AddReview = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  return (
    <>
      <div className='mb-2'>
        <form>
          <div className='form-row'>
            <div className='form-group col-8'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='rating'>Rating</label>
              <select
                id='rating'
                className='custom-select'
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                onBlur={(e) => setRating(e.target.value)}
              >
                <option disabled value=''>
                  Rating
                </option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='review'>Review</label>
            <textarea
              id='review'
              className='form-control'
              value={review}
              onChange={(e) => setReview(e.target.value)}
              onBlur={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className='text-center my-3'>
            <button type='submit' className='btn btn-primary'>
              Add Review
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddReview;