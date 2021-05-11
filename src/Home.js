import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "my new website", body: "lorem ipsm...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsm...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsm...",
      author: "yuqi",
      id: 3,
    },
  ]);

  //props allow to pass from parents component to child components
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
