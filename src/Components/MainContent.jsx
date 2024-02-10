import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Prayer from "./Prayer";
// ---- image 
import FajrImage from '../images/fajr-prayer.png' ; 
import DhhrImage from '../images/dhhr-prayer.png' ; 
import AsrImage from '../images/asr-prayer.png' ; 
import SunsetImage from '../images/sunset-prayer.png' ; 
import NightImage from '../images/night-prayer.png' ; 
import Location from "./Location";
// ---- image 


const PRAYER_DATA = [
    {
        id:'fajr' , 
        name:'الصبح',
        img:FajrImage
    },
    {
        id:'dhhr' , 
        name:'الظهر',
        img:DhhrImage
    },
    {
        id:'asr' , 
        name:'العصر',
        img:AsrImage
    },
    {
        id:'sunset' , 
        name:'المغرب',
        img:SunsetImage
    },
    {
        id:'night' , 
        name:'العشاء',
        img:NightImage
    },
] ;

export default function MainContent (){

    const locationChangeHandler = (location) => {
            console.log(location);
    };

    return (
        <>
        <Location onChange={locationChangeHandler}/>
        <br/>
        <Divider  variant="middle" style={{ borderColor:"white" }}/>
        <Grid container spacing={2}>
            <Grid xs={6}>
                <div>
                    <h2> شباط 09 2024 </h2>
                    <h1>مكة</h1>
                </div>
            </Grid>
            <Grid xs={6}>
                <div>
                    <h2> شباط متبقي حتى صلاة الصبح</h2>
                    <h1> 1:10:10 </h1>
                </div>
            </Grid>
        </Grid>
        <Divider  variant="middle" style={{ borderColor:"white" }}/>
        <br/>
        <Stack direction="row"  >
            {PRAYER_DATA.map(prayer => {
                return <Prayer key={prayer.id} prayer={prayer} />
            })}
        </Stack>
        </>
    );
}