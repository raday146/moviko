import React from 'react';
import *  as AiIcons from 'react-icons/ai';
import *  as Md from 'react-icons/md';

export const SidebarContent= [
   {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text', 
    id:'allMovies'
   },
   {
    title: 'NewMovies',
    path: '/NewMovies',
    icon: <Md.MdFiberNew/>,
    cName: 'nav-text',
    id:"newMovie"
   },
   {
    title: 'HighestRated',
    path: '/HighestRated',
    icon: <Md.MdLocalMovies/>,
    cName: 'nav-text',
    id:"ratedMovie"
   },
    {
    title: 'MostPopular',
    path: '/MostPopular',
    icon: <Md.MdMovieFilter/>,
    cName: 'nav-text',
    id:"popularMovie"
   }
  
]