import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Prayer(props) {
  return (
    <Card sx={{ width: '20%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.prayer.img}
        title={props.prayer.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.prayer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            12:00 AM
        </Typography>
      </CardContent>
    </Card>
  );
}