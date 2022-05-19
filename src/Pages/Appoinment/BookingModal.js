import React, { useState } from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
const BookingModal = ({ treatment, date, setTreatement, refetch }) => {
  const [user] = useAuthState(auth)
  const { _id, slots, name } = treatment;
  const formattedDate = format(date, 'PP')
  const handleSubmit = (event) => {
    event.preventDefault()
    const slots = event.target.slot.value;

    const number = event.target.number.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slots,
      patient: user.email,
      patientName: user.displayName,
      phone: number
    };
    fetch('https://damp-reaches-43552.herokuapp.com/booking', {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if (json.success) {
          refetch()
          toast(`Appoinment is Set ${name} on ${date}`)
        }
        else {
          toast.error(`Appoinment is already added ${name} on ${date}`)
        }
      })

    setTreatement(null);




  }

  console.log(user);

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Booking For :{name}</h3>
          <form onSubmit={handleSubmit} action="">

            <input type="text" disabled value={format(date, 'PP')} placeholder="" className="input input-bordered input-info w-full  my-5" />
            <select name='slot' className="select select-primary w-full ">
              {
                slots.map(slot => <option >{slot}</option>)
              }
            </select>
            <input type="text" name='name' placeholder="Name" disabled value={user?.displayName || ''} className="input input-bordered input-info w-full  my-5" />
            <input type="phone" name='number' placeholder="Phone Number" className="input input-bordered input-info w-full  " />
            <input type="email" name='email' placeholder="Email" value={user.email} disabled className="input input-bordered input-info w-full  my-5" /><br />
            <button type='submit' className='btn btn-primary w-full text-white'>Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;