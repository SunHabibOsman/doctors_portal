import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import Chair from '../../assets/images/chair.png'
const AppoinBanner = ({ date, setDate }) => {
  return (
    <div>
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className='w-3/6' src={Chair} />
          <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      <p>You picked {format(date, 'PP')}.</p>
    </div>
  );
};

export default AppoinBanner;