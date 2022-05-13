import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Datatest from './Datatest';
import qoute from '../../assets/icons/quote.svg'
const Testmonial = () => {
  const testmon = [
    {
      id: 1,
      discription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people1,
      name: 'Winson Harry ',
      location: "california"
    },
    {
      id: 2,
      discription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people2,
      name: 'Winson Harry ',
      location: "california"
    },
    {
      id: 3,
      discription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people3,
      name: 'Winson Harry ',
      location: "california"
    },
  ]
  return (
    <div className='container mx-auto mt-10 '>

      <div className='flex justify-between items-start pl-5'> <div className='text-left'><h4 className='text-primary font-bold'>Testmonial</h4>
        <h1 className='text-3xl' >What Our Patient say</h1></div>
        <div className='lg:w-36 w-24 md:w-24'>
          <img className='' src={qoute} alt="" />
        </div>

      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {
          testmon.map(data => <Datatest
            key={data.id}
            testi={data}
          ></Datatest>)
        }
      </div>
    </div >
  );
};

export default Testmonial;