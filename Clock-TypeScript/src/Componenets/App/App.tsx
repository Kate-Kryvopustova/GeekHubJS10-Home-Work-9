import React from 'react';
import { useState } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './App.css';
import { Button } from '@material-ui/core';
import SelectorCountry from '../SelectorCountry';
import { IChangeTimeFormat, ISelectTimeZone } from '../../interfaces/interfaces';

const App = () => {
  const timeIn24Format: string = 'HH:mm:ss';
  const timeIn12Format: string = 'h:mm:ss A';

  const [timeFormat, setTimeFormat] = useState<string>(timeIn12Format);
  const [timeZoneName, setTimeZoneName] = useState<string>('Europe/Kiev');

  const changeTimeFormat: IChangeTimeFormat = () => {
    if(timeFormat === timeIn12Format) {
      setTimeFormat(timeIn24Format);
    } else {
      setTimeFormat(timeIn12Format);
    }
  };

  let selectTimeZoneName: ISelectTimeZone = (item) => {
    setTimeZoneName(item);
  };;

  return (
    <div>
      <h3 className='header'>
        <Moment
          format={timeFormat}
          interval={250}
          tz={timeZoneName}
        />

      </h3>

      <hr></hr>

      <div className='container'>
        <Button variant="contained" color="primary" onClick={() => changeTimeFormat()}>Change Time Format</Button>

        <SelectorCountry 
          selectTimeZone={selectTimeZoneName}
        />
      </div>
    </div>
  )   
}

export default App;
