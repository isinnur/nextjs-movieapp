"use client";
import Movies from "@/components/Movies";
import React, { useState, useEffect } from "react";

const Page = ({ searchParams }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjk5YjI3Y2I3NTNhZWJlMzM2ZjVjMzEwZWRlZjcwYiIsInN1YiI6IjY1ZGM0OGI4ZWQyYWMyMDE4NzQxZDJjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XIS_1vl5DgFLuLW_QB15nFHHkuCBfegrfW63w4HlJ9o",
        },
      };

      const res = await fetch(
        `https://api.themoviedb.org/3/${
          searchParams.genre
            ? "movie/" + searchParams.genre
            : "trending/all/day"
        }?language=en-US&page=1`,
        options
      );

      const jsonData = await res.json();
      setData(jsonData.results);
    };

    fetchData();
  }, [searchParams.genre]);
  // console.log(data);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.map((dt, i) => (
        <Movies dt={dt} key={i} />
      ))}
    </div>
  );
};

export default Page;
