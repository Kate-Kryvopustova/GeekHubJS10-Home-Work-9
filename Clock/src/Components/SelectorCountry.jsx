import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectorCountry = ({mockData, selectTimeZone}) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const [country, setCountry] = useState('Kiev');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return(
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Country</InputLabel>
      <Select
        id="demo-simple-select"
        value={country}
        onChange={handleChange}
      >
        {mockData.map((item, index) => <MenuItem key={index} value={item.value} onClick={() => selectTimeZone(item.timeZone)}>
          {item.value}
        </MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default SelectorCountry;