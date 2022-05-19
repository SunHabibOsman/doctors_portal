import React from 'react';

const AppoinmentDetails = ({ data, key }) => {
  return (
    <div>
      <tr>
        <th>{key + 1}</th>
        <td>{data.patientName}</td>
        <td>{data.date}</td>
        <td>{data.slots}</td>
        <td>{data.treatment}</td>
      </tr>
    </div>
  );
};

export default AppoinmentDetails;