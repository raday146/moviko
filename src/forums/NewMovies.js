import React,{useContext,memo} from 'react';
import { MovikoContext } from '../contexts/moviko.context';
import MovieCard from '../MovieCard';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/mainForumStyle';

function NewMovies(props){
    const {classes} =props;
    const cinema = useContext(MovikoContext);

    const movies = cinema[0].newMovie;
    const cards =  movies.map(((movie,i) =>(
          
          <MovieCard 
             key={movie.id} 
             index={i} 
             title={movie.title}
             poster_path={movie.poster_path}
             vote_average={movie.vote_average}
             overview ={movie.overview}
             release_date={movie.release_date}
             page='NewMovies'
             />

     ))
    );
    return(
        <div className={classes.mainForum}>
          {cards}
        </div>
    );
}

export default withStyles(styles)(memo(NewMovies));
