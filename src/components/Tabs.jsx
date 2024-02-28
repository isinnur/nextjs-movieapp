"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  //console.log(genre, "genre");
  const tabs = [
    {
      name: "Popular",
      url: "popular",
    },
    {
      name: "Latest",
      url: "latest",
    },
    {
      name: "Up Coming",
      url: "upcoming",
    },
  ];
  const { theme } = useTheme();
  return (
    <div
      className={`p-5 m-5 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-300"
      } flex items-center justify-center gap-7`}
    >
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre
              ? "underline underline-offset-8 text-amber-600"
              : "underline"
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
