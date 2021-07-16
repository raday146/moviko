import React, {useContext} from 'react';
import MovieCard from '../MovieCard';
import {MovikoContext} from '../contexts/moviko.context';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/mainForumStyle';

function Home(props){
    const {classes} =props;
    const cinema  = useContext(MovikoContext);

    let allMovies= cinema[0].allMovies; 
 
    const cards = allMovies.map(((movie,i) =>(
          <MovieCard  
             key={movie.id} 
             index={i} 
             title={movie.title}
             poster_path={movie.poster_path}
             vote_average={movie.vote_average}
             overview ={movie.overview}
             release_date={movie.release_date}
             page="Home"
          />
    ))
    );
    
    return(
        <div className={classes.mainForum}>
          {cards}
        </div>
        
    );
}

export default withStyles(styles)(Home);