import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  function handleScrollLeft() {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  }
  function handleScrollRight() {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={handleScrollLeft}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block"
          size={40}
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={handleScrollRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
