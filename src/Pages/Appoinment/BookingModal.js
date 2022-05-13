import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date, setTreatement }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const slot = event.target.slot.value;
    const name = event.target.firstName.value;
    const number = event.target.number.value;
    const email = event.target.email.value;
    setTreatement(null);



  }
  const { _id, slots, name } = treatment;
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">Booking For :{name}</h3>
          <form onSubmit={handleSubmit} action="">

            <input type="text" disabled value={format(date, 'PP')} placeholder="" class="input input-bordered input-info w-full  my-5" />
            <select name='slot' class="select select-primary w-full ">
              {
                slots.map(slot => <option >{slot}</option>)
              }
            </select>
            <input type="text" name='firstName' placeholder="Name" class="input input-bordered input-info w-full  my-5" />
            <input type="phone" name='number' placeholder="Phone Number" class="input input-bordered input-info w-full  " />
            <input type="email" name='email' placeholder="Email" class="input input-bordered input-info w-full  my-5" /><br />
            <button type='submit' className='btn btn-primary w-full text-white'>Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;