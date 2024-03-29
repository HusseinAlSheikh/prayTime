import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Location(props) {
  const [location, setLocation] = React.useState('ALP');

  const handleChange = (event) => {
    setLocation(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="locationLabel">Location</InputLabel>
        <Select
          labelId="locationLabel"
          id="locationSelect"
          value={location}
          label="Location"
          onChange={handleChange}
          style={{ color:'#fff' , borderColor:'#fff' }}
        >
          <MenuItem value="ALP">حلب</MenuItem>
          <MenuItem value="DAM">دمشق</MenuItem>
          <MenuItem value="RAQ">رقة</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}