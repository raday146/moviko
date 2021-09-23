import { useState, useEffect } from "react";
import {all,getTrailerUrl} from '../constants/constant';
import axios from 'axios';

function GetMoviesPages(){
    const [data, setData] = useState([]);
    const getPages = async () => {
              const repo = await fetch(all);
              let response = await repo.json();
              setData(Array.from(response.results));
              const total_pages = Number(response.total_pages)/(Number(response.total_pages)/2)+2;
              let current_page = Number(response.page); 
              if(total_pages && total_pages > current_page){
                  while (total_pages > current_page){
                   current_page +=1;
                   const repo = await fetch(all.replace('page=1', 'page='+current_page));
                   response = await repo.json();
                   setData(...data,Array.from(response.results));
                  } 
              }
          //console.log(data);     
    }
        
    useEffect(() => {
        getPages();
    }, []);
       
    return data;
} 

<
   export const getTheMovies = async (urlLink)=>{
   const requestOptions = {
        method: 'GET',
        headers: { "Host": "api.themoviedb.org",'Content-Type': 'application/json', 'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar' },
    }; 
    const repo = await fetch(urlLink);
        const data= await repo.json();
        return data.results;
};


function GetMoviesByQuery(query){
    const [data, setData] = useState([]);
    // Define the function that fetches the data from API
    const fetchData = async () => {
    const { data } = await axios.get(query);
    setData([...data.results]);
  };
  /*const filterDupMovies = Array.from(data.results).filter(movie =>{

  })*/
    useEffect(() => {    
        fetchData();
        //getData();
    }, []);
    
    //console.log(data);
    return [...data];
} 

export const fetchTrailers = async (id) => {
        const { trailers } = await axios.get(getTrailerUrl(id));
        return trailers.results;
    };

export {GetMoviesByQuery, GetMoviesPages};
