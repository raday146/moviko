import React, {useContext} from 'react';
import {searchReasultContext} from './contexts/moviko.context';
import { withStyles } from '@material-ui/styles';
import styles from './styles/mainForumStyle';
import img from './img/noResult.png';
import { Link } from 'react-router-dom';


function PageDown(props){
    const {classes} =props;
    const {goTo} = useContext(searchReasultContext);
   const backHome =()=>{
        goTo('home');
        //console.log('a');
     };
    const card =  <div>
            <img src={img} alt='' width={150} />
            <h3> No results found</h3>
            <li  className={classes.linkBtn} >
             <Link exact to="/moviko/Home" onClick={()=>{backHome('Home')} } >
                         <span className={classes.span}>Home</span>
              </Link>
            </li>
          
       </div>;
    return card;
}
 
export default withStyles(styles)(PageDown);