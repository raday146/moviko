import React, {memo, useEffect} from 'react';
import {Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './forums/Home';
import MostPopular from './forums/MostPopular';
import NewMovies from './forums/NewMovies';
import HighestRated  from './forums/HighestRated'; 
import MovikoProvider from './contexts/moviko.context';
import {GetMoviesByQuery, GetMoviesPages} from './hooks/GetAllMovies';
import {HashLoader} from 'react-spinners';
import {withStyles} from '@material-ui/styles';
import useSpinnerState from './hooks/useSpinnerState';
import {populary, theNewst, highestReted, tim} from './constants/constant';
import SearchReasult from './SearchReasult';
import Hmovies from './movies-data/allMovies.json';
import Nmovies from './movies-data/newMovie.json';
import Rmovies from './movies-data/RetedMovie.json';
import Pmovies from './movies-data/popularMovie.json';
import { CSSTransition, TransitionGroup } from "react-transition-group"; 
import {useHistory} from 'react-router-dom';


 import styles from './styles/movikoAppStyle';
 
const cinema ={
  allMovies:[],
  newMovie:[],
  popularMovie:[],
  RetedMovie:[]
}

const localStorage = window.localStorage;


function MovikoApp(props){
  const history = useHistory();
  let spin = !localStorage.getItem('cinema')? true : false;
  const [loading, spinner] = useSpinnerState(spin);

  const {classes} = props;
 /* GetMoviesPages().map(movies => !cinema.allMovies.includes(movies)?  cinema.allMovies.push(movies): movies);
  GetMoviesByQuery(theNewst).map(movies => !cinema.newMovie.includes(movies)?  cinema.newMovie.push(movies): movies);
  GetMoviesByQuery(highestReted).map(movie=> !cinema.RetedMovie.includes(movie)? cinema.RetedMovie.push(movie):movie); 
  GetMoviesByQuery(populary).map(movies => !cinema.popularMovie.includes(movies)?  cinema.popularMovie.push(movies): movies);
  */
 useEffect(()=>{
    if(loading){
     setTimeout(()=>{
      
         const data =[
                {id:"allMovies", allMovies:Hmovies.allMovies},
                {id:"newMovie", newMovie:Nmovies.newMovie},
                {id:"RetedMovie", RetedMovie:Rmovies.RetedMovie},
                {id:"popularMovie", popularMovie:Pmovies.popularMovie}

        ]
        
        console.log(data);
         window.localStorage.setItem('cinema',JSON.stringify(data));
         //window.localStorage.setItem("highestReted", JSON.stringify(movieList));
         spinner();
     },(tim));
    }
  }, []);

    return(
    
     <div>
      {loading? <div 
           className={classes.spinnerLoading}>
           <HashLoader 
            size={100} 
            color={`#282c34`}
            loading={loading} 
            />
            <h4 className={classes.loadingTitle}>Loading...</h4>
           </div> :
          
        <Router location={props.location}>
         <TransitionGroup>
           <CSSTransition >
            <Switch>
             <MovikoProvider>
              <NavBar/>
                        <Route exact  path="/moviko/Home" component={Home}/>
                        <Route exact  path="/moviko/NewMovies" component={NewMovies} />
                        <Route exact  path="/moviko/HighestRated"  component={HighestRated}/>
                        <Route exact  path="/moviko/MostPopular" component ={MostPopular}/>
                        <Route exact  path="/moviko/search/:id" component ={SearchReasult}/>
                        <Redirect to='/moviko/Home'/>   
                    
             </MovikoProvider>
            </Switch>
           </CSSTransition>
         </TransitionGroup>
          
        </Router>
      }
      </div>
    );
}
export default withStyles(styles)(memo(MovikoApp));