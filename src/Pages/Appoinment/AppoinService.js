import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading';
import BookingModal from './BookingModal';
import DetailsService from './DetailsService';

const AppoinService = ({ date }) => {
  // const [service, setService] = useState([])
  const [treatment, setTreatement] = useState(null)
  const formattedDate = format(date, 'PP')


  const { data: service, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json())
  )
  if (isLoading) {
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then(res => res.json())
  //     .then(data => setService(data))


  // }, [formattedDate])

  return (
    <div>
      <h3 className='text-primary font-bold text-xl'>Available Appintment on {format(date, 'PP')}</h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto container'>
        {
          service.map(data => <DetailsService
            key={data._id}
            services={data}
            date={date}
            setTreatement={setTreatement}

          ></DetailsService>)
        }
      </div>
      {treatment && <BookingModal date={date} refetch={refetch} treatment={treatment} setTreatement={setTreatement}></BookingModal>}
    </div>
  );
};

export default AppoinService;