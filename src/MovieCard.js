import React, {memo} from 'react';
import {withStyles} from '@material-ui/styles';
import useToggleState from './hooks/useToggleState';
import image from './img/noFoto.png';
import styles from './styles/movieCardStyle';


function MovieCard(props){
    const [show, toggleHover] = useToggleState(false);
    const {page, classes, title, poster_path, vote_average, overview, release_date}  = props;
    //console.log(page);
    const colorize = vote_average > 7? "red":"white";

    return(
      <div className={classes.root} onClick={toggleHover}>
          <img className={classes.image} src={poster_path? `https://image.tmdb.org/t/p/w1280/${poster_path}`:image} alt=""/>
        <div className={classes.info}>
             <h3 className={classes.title}>{title}</h3>
             <span className={classes.infoSpan} style={{color:colorize}} >{vote_average}</span>
        </div>
        <div className={show?  classes.showView: classes.overView}>
            <p>
             <strong>Summary</strong>:<br/><br/>{overview? overview: "Information unavailable"}<br/><br/>Year: {release_date? release_date: "Unavailable"}
            </p>
        </div>
      </div>    
    );
  /*   <ul>
      <div className={classes.root} onClick={toggleHover}>
          <img className={classes.image} src="https://image.tmdb.org/t/p/w1280/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg" alt=""/>
        <div className={classes.info}>
             <h3 className={classes.title}>F9</h3>
             <span className={classes.infoSpan}>7.9</span>
        </div>
        <div className={show?  classes.showView: classes.overView}>
            <p>
             <strong>Summary</strong>:<br/><br/>"Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother" <br/><br/>Year: 2021
            </p>
        </div>

      </div>
     </ul>   
    );*/

}

export default withStyles(styles)(memo(MovieCard));


/***
 * <div class="movie">
    <img src="https://image.tmdb.org/t/p/w1280/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg" alt="">
    <div class="movie-info unAvailable">
        <h3>F9</h3>
        <span class="red">7.9</span>
    </div>
    <div class="movie-overview"><p><strong>Summary</strong>:<br><br>Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.<br><br>Year: 2021</p></div>
    </div>
 */