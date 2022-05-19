import React from 'react';
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'

import marker from '../../assets/icons/marker.svg'

const Card = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid lg:grid-cols-3 md:gird-cols-2 md:gird-cols-1 sm:text-center justify-center gap-5 '>
        <div className="card pt-4 lg:card-side shadow-xl bg-gradient-to-r from-primary to-secondary flex justify-center items-center text-white text-left ">
          <figure className='pl-3' ><img src={clock} /></figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click tddhe button to listen on Spotiwhy app.</p>

          </div>
        </div>
        <div className="card pt-4 lg:card-side bg-base-100 shadow-xl bg-accent text-white text-left">
          <figure className='pl-3'  ><img src={marker} /></figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>

          </div>
        </div>
        <div className="card lg:card-side shadow-xl bg-gradient-to-r from-primary to-secondary flex justify-center items-center text-white  text-left pt-4">
          <figure className='pl-3' ><img src={phone} /></figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;