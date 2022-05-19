import React from 'react';
import background from '../../assets/images/appointment.png'
const Contact = () => {
  return (
    <div className='mt-24' style={{ background: `url(${background})` }}>
      <div className='p-10'>
        <div>
          <h3 className='text-primary font-bold '>contact us</h3>
          <h2 className='text-white text-3xl'>Stay Connected with us</h2>
        </div>
        <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs my-4" />
        <br />
        <input type="text" placeholder="Subject Here" className="input input-bordered input-accent w-full max-w-xs " />
        <br />
        <textarea className="textarea textarea-accent my-4 w-full max-w-xs" placeholder="Bio"></textarea><br />
        <button className='btn btn-primary text-white'>Submit</button>
      </div>

    </div>
  );
};

export default Contact;