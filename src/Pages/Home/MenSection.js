import React from 'react';
import Treat from '../../assets/images/treatment.png'

const MenSection = () => {
  return (
    <section className='lg:mt-20 container mx-auto lg:px-40 lg:py-20 lg:mb-40 sm:m-5'>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={Treat} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">Exceptional Dental Care,On your terms</h2>
          <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
          <div className="card-actions justify-start pt-5 text-white ">
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MenSection;