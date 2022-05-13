import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import DetailsService from './DetailsService';

const AppoinService = ({ date }) => {
  const [service, setService] = useState([])
  const [treatment, setTreatement] = useState(null)
  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then(res => res.json())
      .then(data => setService(data))


  }, [])

  return (
    <div>
      <h3 className='text-primary font-bold text-xl'>Available Appintment on {format(date, 'PP')}</h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        {
          service.map(data => <DetailsService
            key={data._id}
            services={data}
            date={date}
            setTreatement={setTreatement}
          ></DetailsService>)
        }
      </div>
      {treatment && <BookingModal date={date} treatment={treatment} setTreatement={setTreatement}></BookingModal>}
    </div>
  );
};

export default AppoinService;