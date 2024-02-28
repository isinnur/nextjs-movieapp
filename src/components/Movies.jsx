"use client";
import React from "react";
import Image from "next/image";
const Movies = ({ dt }) => {
  return (
    <div className="min-w-[400px] h-[300px] items-center justify-center">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          dt.backdrop_path || dt.poster_path
        }`}
        width={400}
        height={300}
      />
      <h1 className="bg-gray-900">{dt.original_title}</h1>
    </div>
  );
};

export default Movies;
