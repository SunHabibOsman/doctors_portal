import React, { useEffect, useState } from 'react';

const useToken = (user) => {

  const [token, setToken] = useState('')

  useEffect(() => {


    const email = user?.user?.email;


    const currentUser = { email: email };


    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: 'PUT',
        body: JSON.stringify({
          currentUser,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((data) => {

          localStorage.setItem('accessToken', data.accessToken)
          setToken(data.accessToken);


        })


    }
  }, [user])



  return [token];
};

export default useToken;