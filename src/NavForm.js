import React,{useContext} from "react";
import { TextField, Paper,withStyles } from "@material-ui/core";
import useInuptState from './hooks/useInputState';
import { getMoviesBySearch} from "./hooks/GetAllMovies";
import {search} from './constants/constant';
import { searchReasultContext } from "./contexts/moviko.context";
import { Link } from "react-router-dom";
import styles from './styles/navFormStyle';

function NavForm(props){
   
   const {classes} = props;
   const [value, handleChange, reset] = useInuptState("");
   const {dis, goTo} = useContext(searchReasultContext);
   
    return(
       <div className={classes.paper}> 
          <Paper style={{margin: "1rem 0", padding:"0 1rem"}}>
            <form onSubmit = {e =>{
                  e.preventDefault();
                //  console.log(search+value);
                                      console.log('at search');

                 value? getMoviesBySearch(search+value).then((data) =>{
                    if(data){
                      dis({items:data});
                      goTo(`/moviko/search/${value}`);
                      
                   }
                 }
            
                 ) :// console.log('no input');
                 //addTodo(value);
                 reset();
            }}>
             <TextField
               className={classes.form}
               value={value} 
               onChange={handleChange}
               margin='normal'
               label="search movie..."
               fullWidth    
               />
            </form>
            <Link to={`/search/${value}`}/>

          </Paper>
       </div>
    );
}
export default withStyles(styles)(NavForm);