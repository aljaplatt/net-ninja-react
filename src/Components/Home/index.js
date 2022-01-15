import { useState } from "react";
import BlogList from "../BlogList";

const Home = () => {
  /* when looping though an array - each item must have a unique id - can use nanid or uuid for example. Key used in line 19. React uses this key to keep track of each item in the DOM. Using this, React will track changes, add or removing items. */
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
  /* Using the map method we can loop through an array and return some template for each item. The method invokes a callback fn for each item, and returns template for each. */
  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;

// Line 19 - Blogs arr is being passed down as a prop to BlogList component.
