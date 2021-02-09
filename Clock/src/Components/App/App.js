import 'moment-timezone';
import React, { useState } from 'react';
import Moment from 'react-moment';
import { Button } from '@material-ui/core';
import SelectorCountry from '../SelectorCountry'
import mockData from '../../mockTimeZones/mockTimeZones'
import './App.css'

const App = () => {
  const timeIn24Format = 'HH:mm:ss';
  const timeIn12Format = 'h:mm:ss A';

  const [timeFormat, setTimeFormat] = useState(timeIn12Format);
  const [timeZoneName, setTimeZoneName] = useState('Europe/Kiev');

  const selectTimeZone = (item) => {
    setTimeZoneName(item);
  };

  const changeTimeFormat = () => {
    if (timeFormat === timeIn12Format) {
      setTimeFormat(timeIn24Format);
    } else {
      setTimeFormat(timeIn12Format);
    }
  }

  return (
    <div className='wrapped'>
      <h3 className='header'>
        <Moment
          format={timeFormat}
          interval={250}
          tz={timeZoneName}
        />
      </h3>

      <hr />

      <div className='container'>
        <Button variant="contained" color="primary" onClick={() => changeTimeFormat()}>Change Time Format</Button>

        <SelectorCountry
          mockData={mockData}
          selectTimeZone={selectTimeZone}
        />
      </div>
    </div>
  );
}

export default App;