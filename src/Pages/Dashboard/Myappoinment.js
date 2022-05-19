import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Myappoinment = () => {
  const [appoinment, setAppoinment] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch(`https://damp-reaches-43552.herokuapp.com/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          'authorization': `Bearer, ${localStorage.getItem('accessToken')}`
        },
      })

        .then(res => {
          console.log(res);

          if (res.status === 401 || res.status === 402 || res.status === 403) {
            navigate('/')
            localStorage.removeItem('accessToken')
            signOut(auth);
          }
          return res.json()

        })
        .then(data => {
          console.log(data)
          setAppoinment(data)
        })

    }

  }, [user])
  let x = 0;
  return (
    <div>
      <h1>my appoinment:{appoinment.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {

              appoinment.map((data, index) => <tr>
                <th>{index + 1}</th>
                <td>{data.patientName}</td>
                <td>{data.date}</td>
                <td>{data.slots}</td>
                <td>{data.treatment}</td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myappoinment;