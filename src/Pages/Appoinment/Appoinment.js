import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import AppoinBanner from './AppoinBanner';
import AppoinService from './AppoinService';
const Appoinment = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <AppoinBanner date={date} setDate={setDate}></AppoinBanner>
      <AppoinService date={date}></AppoinService>
    </div>
  );
};

export default Appoinment;