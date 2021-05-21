import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  //useEffect use name as dependency to watch whether the value change

  //props allow to pass from parents component to child components
  return (
    <div className="home">
      {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> */}
    </div>
  );
};

export default Home;
