import React from 'react';

const Datatest = ({ testi }) => {
  const { img, name, discription, id, location } = testi;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-left">

          <p >{discription}</p>
          <div class="card-actions justify-start">
            <div>
              <div class="avatar online placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <span class="text-xl"><img src={img} alt="" /></span>
                </div>
              </div>
            </div>
            <div><h2 class="card-title">{name}</h2>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatest;