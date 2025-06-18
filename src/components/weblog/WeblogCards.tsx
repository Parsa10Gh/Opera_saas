"use client";

import Link from "next/link";
import React from "react";

interface BlogPost {
  blogPost: {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
  };
}

const weblogCards = (props: BlogPost) => {
  return (
    <div
      id="card"
      className="bg-white w-full border-8 border-gray rounded-3xl mt-4"
      dir="rtl"
       data-AOS="fade-right"
    >
      <img
        id="cardImage"
        className="w-full h-1/2 rounded-t-2xl"
        src={props.blogPost.imageSrc}
        alt=""
      />
      <div
        id="CardInfoContainer"
        className="flex-col h-1/2 text-right bg-purple-800 rounded-b-xl mx-auto py-4 px-4"
      >
        <h2 id="title" className="h-1/6 text-2xl text-yellow-500 font-bold">
            <Link href={`/blogpages/${props.blogPost.id}`}>
                {props.blogPost.title}
            </Link>
        </h2>
        <p id="topic" className="h-1/6 text-lg text-white font-bold mt-1">
          {props.blogPost.subtitle}
        </p>
        <div
          id=""
          className="h-4/6 lg:flex lg:flex-col mx-auto mt-2 sm:mt-4 items-center relative"
        >
          <div id="discribtionContainer" className="py-4">
            <p
              id="discribtion"
              className="text-white text-xs"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2, // Number of lines to show
                WebkitBoxOrient: "vertical",
              }}
            >
              {props.blogPost.description}
            </p>
          </div>
          <div
            id="seeProductContainer"
            className="flex justify-center items-center"
          >
            <a
              id="seeProductBtn"
              className="text-center text-lg rounded-xl bg-yellow-500 p-2 shadow-md shadow-black hover:shadow-none"
              href={`/blogpages/${props.blogPost.id}`}            
            >
              مشاهده کامل
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weblogCards;
