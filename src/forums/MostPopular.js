import React,{useContext} from 'react';
import { MovikoContext } from '../contexts/moviko.context';
import MovieCard from '../MovieCard';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/mainForumStyle';

function MostPopular(props){
    const {classes} =props;
    const cinema = useContext(MovikoContext);
    const popularMovie = cinema[0].popularMovie;

    const cards =  popularMovie.map(((movie,i) =>(
          
          <MovieCard 
             key={movie.id} 
             index={i} 
             title={movie.title}
             poster_path={movie.poster_path}
             vote_average={movie.vote_average}
             overview ={movie.overview}
             release_date={movie.release_date}
             page='MostPopular'
             />

     ))
    );
    return(
        <div className={classes.mainForum}>
          {cards}
        </div>
    );
}

export default withStyles(styles)(MostPopular);

