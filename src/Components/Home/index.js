import { useState, useEffect } from "react";
import BlogList from "../BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect ran");
    // we can access state inside useEffect - however changing state here can cause an infinite loop of re-renders. change state - render - statew change - render etc
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;

/* useEffect runs a fn every render of the component, every time something changes. It re-renders the DOM to update the state change. 

fetch data or communicate with authentication service - side effects */
