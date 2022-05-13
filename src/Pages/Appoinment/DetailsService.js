import { format } from 'date-fns';
import React from 'react';

const DetailsService = ({ services, date, setTreatement }) => {
  const { _id, slots, name } = services;

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center">
          <h2 class="card-title text-secondary text-center">{name}</h2>
          <p>{
            slots.length > 0 ? <span>{slots[0]}</span> :
              <span className='text-red-500'>No Appointment Available</span>
          }</p>
          <p>{slots.length}{slots.length > 1 ? 'spaces' : 'space'}  available</p>
          <div class="card-actions justify-center">

            <label onClick={() => setTreatement(services)} disabled={slots.length === 0} for="my-modal-6" class="btn btn-primary text-white modal-button">BOOK APPOINTMENT</label>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DetailsService;