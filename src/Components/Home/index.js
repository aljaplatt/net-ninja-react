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

  // Define the fn here, we can interact with the data directly and pass the fn through as a prop
  // Create a prop called handle Delete and set it too the handle delete fn.
  const handleDelete = (id) => {
    /* Using the filter method to filter the arr, then temp store in newBlogs.
    filter returns a new filtered array. - we're passing in the id we want to remove so we want fileter to be true if the id doesnt match our id, we want to keep that in the arr, false if it does match it.   */
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  /* Our condition will be true if the id in the blog doesnt match the id argument, so it will remsin in the arr. False if it does match it and filtered out. The new arr (all that were true) will then be stored in newBlogs*/

  /* Using the map method we can loop through an array and return some template for each item. The method invokes a callback fn for each item, and returns template for each. */
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      /> */}
    </div>
  );
};

export default Home;

// Line 19 - Blogs arr is being passed down as a prop to BlogList component.

// line 14 - we have duplicated the blog list component, and will pass in new data to the second one, using the filter method & a specified condition. The method invokes a callback fn for each item in the array - if true is returned for the condition, it is kept in the array, else it filters it out. A new array is returned with all the kept (true) items.
/* 
For the second component we're going to filter out all posts not from mario. 
Line 20 - we want to pass in a blog, then return true or false to the condition. */
