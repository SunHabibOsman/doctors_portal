import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import DataService from './DataService';

const Service = () => {
  const service = [
    {
      id: 1,
      name: 'Fluride Treatment',
      img: flouride,
      discription: "we are here to help to make your teeth safe and healthy"
    },
    {
      id: 2,
      name: 'Cavity Fils',
      img: cavity,
      discription: "we are here to help to make your teeth safe and healthy"
    },
    {
      id: 3,
      name: 'Teeth whitenning',
      img: teeth,
      discription: "we are here to help to make your teeth safe and healthy"
    }



  ]
  return (
    <div className='mt-14 mb-14'>
      <div>   <h3 className='text-3xl text-primary font-bold'>Our Services</h3>
        <h2 className='text-5xl'>Service We Provide
        </h2>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6 sm:mb-56'>
        {
          service.map(data => <DataService
            key={data.id}
            services={data}
          ></DataService>)
        }
      </div>
    </div>
  );
};

export default Service;