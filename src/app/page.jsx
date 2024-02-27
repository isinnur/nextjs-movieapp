import Movies from "@/components/Movies";
import React from "react";

const page = async ({ searchParams }) => {
  const apiKey = "0699b27cb753aebe336f5c310edef70b";

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = await res.json();
    console.log(data, "data");

    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </h1>
      </div>
    );
  } catch (error) {
    console.error("Fetch hatası:", error);
    return null;
  }
};

export default page;
