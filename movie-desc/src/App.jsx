import React, { useState } from 'react'
import Search from './components/Search'
import { useEffect } from 'react';
const API_BASE_URL= 'https://api.themoviedb.org/3';
const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS={
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}
const App = () => {
   const fetchMovies=async()=>{
    
   try{
    const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response=await fetch(endpoint,API_OPTIONS);
    if(!response.ok){
      throw new Error('Failed to fetch movies');
    }
   }catch{

   }

   }
  const [searchTerm,setSearchTerm]=useState("");

  useEffect(()=>{
    
  },[]);
  return (
   <main>
     <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>
        {/* state can also be passed as a props? */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
   </main>
  )
}
export default App