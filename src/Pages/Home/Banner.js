import React from 'react';
import Chair from '../../assets/images/chair.png'
const Banner = () => {
  return (
    <div>
      <div style={{ height: '100%' }} class="hero  container m-auto  mb-24">
        <div class="hero-content flex-col lg:flex-row-reverse lg:pl-32 ">
          <img style={{ height: '70%', width: '100%' }} src={Chair} />
          <div>
            <h1 class="text-left text-5xl font-bold ">Box Office News!</h1>
            <p class="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 flex btn text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;