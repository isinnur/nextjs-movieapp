"use client";
import React from "react";
import Movies from "@/components/Movies";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=0699b27cb753aebe336f5c310edef70b&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();

  //console.log(keyword);
  console.log(data);
  return (
    <div>
      {!data?.results ? (
        <div>Not found</div>
      ) : (
        <div className="flex items-center flex-wrap justify-center gap-3">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
