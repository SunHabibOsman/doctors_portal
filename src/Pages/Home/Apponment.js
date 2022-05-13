import React from 'react';
import doctors from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor-small.png'
const Apponment = () => {
  return (
    <div className='flex ' style={{
      background: `url(${doctors})`

    }}>
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-200px] ' src={doctor} alt="" />
      </div>
      <div className='flex-1 my-auto text-left text-white pl-15 ml-5 py-5 pt-5'>
        <h4 className='text-primary font-bold'>Appoinment</h4>
        <h1 className='text-4xl py-2'>Exceptional Dental Care,On your terms</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
        <button className='btn btn-primary text-white mt-4'>Get Started</button>
      </div>
    </div>
  );
};

export default Apponment;