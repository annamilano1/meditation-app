import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




function Timer({percentage, time}) {





    return ( 
        <><CircularProgressbar value={percentage} text={time} styles={buildStyles({
            pathColor:'rgb(29, 33, 57)',
            rotation: 0,
            strokeLinecap: 'round',
            pathTransitionDuration: 0.5,
            textColor: 'rgb(90, 41, 59)',
            trailColor: 'rgb(90, 70, 59)',
          
            
        })}/>
       
        </>
        
     );
}

export default Timer;