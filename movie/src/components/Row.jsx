import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';


const Row = ({ title, fetchURL, rowID}) => {
    const [movies, setMovie] = useState([]);
   

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovie(response.data.results);
        })
    },[fetchURL])
    console.log(movies);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}>
           {movies.map((item, id) => (
            <Movie key={id} item={item}/>
           ))} 
        </div>
      </div>
    </>
  )
}

export default Row
