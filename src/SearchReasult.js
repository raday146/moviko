import React, {useContext} from 'react';
import MovieCard from './MovieCard';
import {searchReasultContext} from './contexts/moviko.context';
import { withStyles } from '@material-ui/styles';
import styles from './styles/mainForumStyle';


function SearchReasult(props){
    const {classes} =props;
    const {data} = useContext(searchReasultContext);
    console.log(data);
    const cards = data.map(((movie,i) =>(
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
    );
    
    return(
        <div className={classes.mainForum}>
          {cards}
        </div>
        
    );
}

export default withStyles(styles)(SearchReasult);