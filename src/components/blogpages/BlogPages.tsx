"use client";

import React from "react";
import BlogPage from "./BlogPage";
import Navbar from "../navbar/Navbar";
import { blogPosts } from "../../helper/data";

interface inf {
  id: number;
}

interface BlogPost {
  id: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  date: string;
}


const BlogPages: React.FC<inf> = ({id}) => {

  return (
    <div>
      <Navbar />
      {blogPosts.map(
        (content : BlogPost, i:number) => i == id - 1 && <BlogPage key={i} blogPost={content}/>
      )}
    </div>
  );
};

export default BlogPages;
