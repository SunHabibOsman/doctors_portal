import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading';
import Rawdetails from './Rawdetails';

const Users = () => {
  const { data: auser, isLoading, refetch } = useQuery('users', () =>
    fetch('http://localhost:5000/user')
      .then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className="text-2xl">All User</h2>
      <div>
        <div class="mt-44">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>ADD</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                auser.map((data, index) => <Rawdetails
                  key={index}
                  data={data}
                  refetch={refetch}
                ></Rawdetails>)
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;