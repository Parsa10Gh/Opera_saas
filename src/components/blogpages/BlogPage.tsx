import React from "react";

interface info {
  blogPost: {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    date: string;
  };
}

const BlogPage: React.FC<info> = ({ blogPost }) => {
  const formatText = (txt: string) => {
    return txt.split("\n").map((item, key) => {
      if (item.trim().startsWith("**") && item.trim().endsWith("**")) {
        return (
          <h2 key={key} className="text-2xl font-bold mb-4">
            {item.replace(/\*\*/g, "")}
          </h2>
        );
      } else if (item.trim().startsWith("*") && item.trim().endsWith("*")) {
        return (
          <em key={key} className="italic text-gray-600 block my-4">
            {item.replace(/\*/g, "")}
          </em>
        );
      } else if (item.trim().startsWith("[") && item.trim().endsWith(")")) {
        const parts = item.split("](");
        const text = parts[0].replace("[", "");
        const url = parts[1].replace(")", "");
        return (
          <a
            key={key}
            href={url}
            className="text-blue-500 underline hover:text-blue-700"
          >
            {text}
          </a>
        );
      } else {
        return (
          <span
            key={key}
            className="block my-2 leading-relaxed text-lg text-justify"
          >
            {item}
          </span>
        );
      }
    });
  };

  return (
    <>
      <img
        src={blogPost.imageSrc}
        alt=""
        className="mx-auto w-full h-[500px] md:h-[600px] rounded-lg shadow-lg"
      />
      <div
        id="blogContainer"
        className="px-4 sm:px-20 md:px-32 lg:px-32 xl:px-60 py-4 sm:py-22 md:py-20 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-md"
        style={{ direction: "rtl" }}
      >
        <div id="title-container" className="justify-between items-center px-3">
          <div className="text-center md:text-right py-8 md:pl-4">
            <h1 className="text-5xl font-bold text-sky-600 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            <p className="text-purple-700 text-2xl mb- font-medium">
              {blogPost.subtitle}
            </p>
          </div>
        </div>
        <div className="py-8 my-8 text-justify flex justify-center px-8 rounded-xl bg-white shadow-lg">
          <p className="text-black leading-loose text-lg">
            {formatText(blogPost.description)}
          </p>
        </div>
        <div className="w-full text-center mt-16">
          <a
            href="/weblog"
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-40 py-3 text-lg shadow-md rounded-2xl hover:bg-sky-400 hover:shadow-lg transition-all duration-300"
          >
            مشاهده سایر بلاگ‌ها
          </a>
        </div>
        <div className="flex justify-center w-full py-12 lg:px-32 2xl:px-52">
          <video
            controls
            className="w-full h-[400px] md:h-[500px] border-4 border-gray-400 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
