import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import *  as AiIcons from 'react-icons/ai';
import *  as Md from 'react-icons/md';

export const SidebarContent= [
   {
    title: 'Home',
    path: '/',
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
    id:"RetedMovie"
   },
    {
    title: 'MostPopular',
    path: '/MostPopular',
    icon: <Md.MdMovieFilter/>,
    cName: 'nav-text',
    id:"popularMovie"
   }
  
]