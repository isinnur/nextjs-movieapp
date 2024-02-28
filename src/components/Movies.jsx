"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Movies = ({ dt }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`movie/${dt?.id}`)}
      className=" min-w-[470px] relative imgContainer cursor-pointer"
    >
      <Image
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        width={470}
        height={300}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100">
        <div className="text-base font-bold">{dt.title}</div>
        {dt?.release_date} - {dt?.vote_average}
      </div>
    </div>
  );
};

export default Movies;
