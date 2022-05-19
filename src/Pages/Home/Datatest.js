import React from 'react';

const Datatest = ({ testi }) => {
  const { img, name, discription, id, location } = testi;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-left">

          <p >{discription}</p>
          <div className="card-actions justify-start">
            <div>
              <div className="avatar online placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <span className="text-xl"><img src={img} alt="" /></span>
                </div>
              </div>
            </div>
            <div><h2 className="card-title">{name}</h2>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatest;