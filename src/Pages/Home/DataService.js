import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
const DataService = ({ services }) => {
  const { id, name, img, discription } = services;
  return (
    <div className=''>
      <div class="card w-96 bg-base-100 shadow-xl  ">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{discription}</p>

        </div>
      </div>
    </div>
  );
};

export default DataService;