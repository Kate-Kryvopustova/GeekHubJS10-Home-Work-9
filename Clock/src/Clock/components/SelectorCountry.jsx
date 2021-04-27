import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { v4 as uuidv4 } from 'uuid';

const SelectorCountry = ({ mockData, selectTimeZone }) => (
  <Dropdown>
    <Dropdown.Toggle variant='Primary' id='Primary'>
      Select country
    </Dropdown.Toggle>

    <Dropdown.Menu>
      { mockData.map((item) => (
        <Dropdown.Item
          onClick={ () => selectTimeZone(item.timeZone) }
          value={ item.value }
          key={ uuidv4() }
        >
          { item.value }
        </Dropdown.Item>
      )) }
    </Dropdown.Menu>
  </Dropdown>
);

export default SelectorCountry;
