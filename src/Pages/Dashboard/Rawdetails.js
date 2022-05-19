import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Loading';

const Rawdetails = ({ key, data, refetch }) => {
  const handleAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${data.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          toast.error("You are not a admin dont do anything")
        }
        return res.json()
      })
      .then(data => {
        console.log(data);

        if (data.modifiedCount > 0) {
          refetch()
          toast.success("Your Admin added")
        }

      }
      )

  }
  return (
    <div>
      <tr>
        <th>{key + 1}</th>
        <td>{data.email}</td>
        <td>{data.role !== 'admin' && <button className='btn' onClick={handleAdmin}> Make Admin</button>}</td>
        <td><button className='btn ' >Remove User</button></td>
      </tr>
    </div>
  );
};

export default Rawdetails;