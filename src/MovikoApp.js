import React, {memo, useEffect} from 'react';
import {Redirect, Route, Switch  } from 'react-router-dom';
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
 import styles from './styles/movikoAppStyle';
 
const cinema ={
  allMovies:[],
  newMovie:[],
  popularMovie:[],
  RetedMovie:[]
}

const localStorage = window.localStorage;


function MovikoApp(props){
  let spin = !localStorage.getItem('cinema')? true : false;
  const [loading, spinner] = useSpinnerState(spin);

  const {classes} = props;
  GetMoviesPages().map(movies => !cinema.allMovies.includes(movies)?  cinema.allMovies.push(movies): movies);
  GetMoviesByQuery(theNewst).map(movies => !cinema.newMovie.includes(movies)?  cinema.newMovie.push(movies): movies);
  GetMoviesByQuery(highestReted).map(movie=> !cinema.RetedMovie.includes(movie)? cinema.RetedMovie.push(movie):movie); 
  GetMoviesByQuery(populary).map(movies => !cinema.popularMovie.includes(movies)?  cinema.popularMovie.push(movies): movies);
  useEffect(()=>{
    if(loading){
     setTimeout(()=>{
      
         const data =[
                {id:"allMovies", allMovies:cinema.allMovies},
                {id:"newMovie", newMovie:cinema.newMovie},
                {id:"RetedMovie", RetedMovie:cinema.RetedMovie},
                {id:"popularMovie", popularMovie:cinema.popularMovie}

        ]
        
         window.localStorage.setItem('cinema',JSON.stringify(data));
         //window.localStorage.setItem("highestReted", JSON.stringify(movieList));
         spinner();
     },(tim));
    }
  }, []);

    return(
     <>
      {loading? <div 
           className={classes.spinnerLoading}>
           <HashLoader 
            size={100} 
            color={`#282c34`}
            loading={loading} 
            />
            <h4 className={classes.loadingTitle}>Loading...</h4>
           </div> :
          
        <Route >
            <Switch>
             <MovikoProvider>
              <NavBar/>
                        <Route exact  path="/Home" component={Home}/>
                        <Route exact  path="/NewMovies" component={NewMovies} />
                        <Route exact  path="/HighestRated"  component={HighestRated}/>
                        <Route exact  path="/MostPopular" component ={MostPopular}/>
                        <Route exact  path="/search/:id" component ={SearchReasult}/>
                        <Redirect to='/Home'/>   
             </MovikoProvider>
            </Switch>
        </Route>
       }
     </>
    );
}
export default withStyles(styles)(memo(MovikoApp));