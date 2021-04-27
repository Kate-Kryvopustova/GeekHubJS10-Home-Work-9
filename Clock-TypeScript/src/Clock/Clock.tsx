import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Moment from 'react-moment';
import 'moment-timezone';
import './Clock.css';
import SelectorCountry from './components/SelectorCountry';
import { timeZones } from '../services/timeZones';
import { ISelectTimeZone } from '../interfaces/interfaces';

const Clock = () => {
  const timeIn24Format = 'HH:mm:ss';
  const timeIn12Format = 'h:mm:ss A';

  const [is24Format, setIs24Format] = useState(true);
  const [timeZoneName, setTimeZoneName] = useState<string>('Europe/Kiev');

  const selectTimeZoneName: ISelectTimeZone = (item): void => {
    setTimeZoneName(item);
  };

  return (
    <div>
      <h3 className='header'>
        <Moment
          format={ is24Format ? timeIn24Format : timeIn12Format }
          interval={ 250 }
          tz={ timeZoneName }
        />
      </h3>

      <hr></hr>

      <div className='container'>
        <Button
          variant='contained'
          color='primary'
          onClick={ () => setIs24Format(!is24Format) }
        >
          Change Time Format
        </Button>

        <h3 className='container__time-zone-name'>{ timeZoneName }</h3>

        <SelectorCountry
          mockData={ timeZones }
          selectTimeZone={ selectTimeZoneName }
        />
      </div>
    </div>
  )   
}

export default Clock;
