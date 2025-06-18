import React from "react";
import BlogPages from "@/components/blogpages/BlogPages";

interface PageProps {
  params: {
    id: number;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = params;
  console.log(id);

  return (
    <div>
      <BlogPages id={id} />
    </div>
  );
};

export default Page;
