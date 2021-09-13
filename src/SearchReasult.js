import React, {useContext} from 'react';
import MovieCard from './MovieCard';
import {searchReasultContext} from './contexts/moviko.context';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styles from './styles/mainForumStyle';
import img from './img/noResult.png';
import { Link } from 'react-router-dom';


function SearchReasult(props){
    const {classes} =props;
    const {data,goTo} = useContext(searchReasultContext);
   const backHome =()=>{
        goTo('home');
        console.log('a');
     };
    const cards = data.length? data.map(((movie,i) =>(
          <MovieCard  
             key={movie.id} 
             index={i} 
             title={movie.title}
             poster_path={movie.poster_path}
             vote_average={movie.vote_average}
             overview ={movie.overview}
             release_date={movie.release_date}
             page="SearchReasult"
          />
     ))
  
    ): <div>
            <img src={img} alt='' width={150} />
            <h3> No results found</h3>
            <li  className={classes.linkBtn} >
             <Link exact to="/Home" onClick={()=>{backHome('Home')} } >
                         <span className={classes.span}>Home</span>
              </Link>
            </li>
          
       </div>;
  
    return(
        <div className={data.length? classes.mainForum: classes.noResult}>
          {cards}
        </div> 
    );
}
/**
 *  <Button  className={classes.button} variant="contained" color="primary">
             <Link className={classes.button} exact to="/Home" onClick={()=>{backHome('Home')} } >
                                  <span className={classes.span}>Home</span>
             </Link>
            </Button>
 */
export default withStyles(styles)(SearchReasult);