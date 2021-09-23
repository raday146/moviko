import React, {memo, useEffect} from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
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
import {populary, theNewst, highestRated, timer} from './constants/constant';
import SearchReasult from './SearchReasult';
import {CSSTransition, TransitionGroup } from "react-transition-group"; 


 import styles from './styles/movikoAppStyle';
 
const cinema ={
  allMovies:[],
  newMovie:[],
  popularMovie:[],
  ratedMovie:[]
}

const localStorage = window.localStorage;


function MovikoApp(props){
  //const history = useHistory();
  let spin = !localStorage.getItem('cinema')? true : false;
  const [loading, spinner] = useSpinnerState(spin);

  const {classes} = props;
  GetMoviesPages().map(movies => !cinema.allMovies.includes(movies)?  cinema.allMovies.push(movies): movies);
  GetMoviesByQuery(theNewst).map(movies => !cinema.newMovie.includes(movies)?  cinema.newMovie.push(movies): movies);
  GetMoviesByQuery(highestRated).map(movies=> !cinema.ratedMovie.includes(movies)? cinema.ratedMovie.push(movies):movies); 
  GetMoviesByQuery(populary).map(movies => !cinema.popularMovie.includes(movies)?  cinema.popularMovie.push(movies): movies);
  
 useEffect(()=>{
    if(loading){
     setTimeout(()=>{
      
         const data =[
                {id:"allMovies", allMovies:cinema.allMovies},
                {id:"newMovie", newMovie:cinema.newMovie},
                {id:"ratedMovie", ratedMovie:cinema.ratedMovie},
                {id:"popularMovie", popularMovie:cinema.popularMovie}

        ]
        console.log(data)
         window.localStorage.setItem('cinema',JSON.stringify(data));
         //window.localStorage.setItem("highestReted", JSON.stringify(movieList));
         spinner();
     },(seconds));
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
          
        <Route>
         <TransitionGroup>
          <CSSTransition>
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
          
        </Route>
      }
      </div>
    );
}
export default withStyles(styles)(memo(MovikoApp));