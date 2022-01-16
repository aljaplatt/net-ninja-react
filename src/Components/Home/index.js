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
  /* Change this state with a button */
  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect ran");
    console.log("name");
    // we can access state inside useEffect - changing state here can cause an infinite
    // loop of re-renders. change state - render - state change - render etc -
    //[dependency arr] - if empty, will only run once on first render. By putting
    // name in the arr, useEffect will track name for changes - when its state changes
    //- the setName fn will run - name is now a dependency.
    // - when we click other buttons, the screen will re-render but the fn wont run,
    // only when the button with the setName fn attached is clicked will useEffect run.
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;

/* useEffect runs a fn every render of the component, every time something changes. It re-renders the DOM to update the state change. 

fetch data or communicate with authentication service - side effects */
