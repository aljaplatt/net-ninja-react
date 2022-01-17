import { useState, useEffect } from "react";
import BlogList from "../BlogList";

// now we will fetch the data from db.json using json-server, we will update the state
// using set blogs
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  /* State for fetch loading message */
  const [isPending, setIsPending] = useState(true);
  // store error in state
  const [error, setError] = useState(null);

  useEffect(() => {
    // timeout is simulating real fetch - do not use irl
    setTimeout(() => {
      // fetching the data when the component first renders- get request to localhost:8000
      async function fetchData() {
        const response = await fetch(`http://localhost:8000/blogs`);
        // if the response is not ok - if this is true...throw error
        // this is then caught in the catch block.
        // this can help if our resquest is denied, endpoint doesnt exist
        // catch block not enough, response is sent, but no data/different status
        if (!response.ok) {
          throw Error("Data is unavailable");
        }
        // returns response object
        console.log(response);
        const fetchData = await response.json();
        console.log({ fetchData });
        // Now we update state with this data by passing fetchData in to setBlogs.
        setBlogs(fetchData);
        // fetch is complete - remove isPending mess/change state
        setIsPending(false);
        // remove error message if the request is successful
        setError(null);
      }

      fetchData().catch((err) => {
        // will catch network errors - cannot connect to server
        // console.log(err.message); - now we can use setState
        // setIsPending false - will now not show loading message - it's unavailable
        setIsPending(false);
        setError(err.message);
      });
    }, 1000);
  }, []);

  // Once we've updated the state and it has a value, it passing the blog data to
  // the BlogList, which can map through them and update/render the DOM.
  return (
    <div className="home">
      {/* now if we have a value for error, it will be displayed, however loading mess still shows */}
      {error && <div>{error}</div>}
      {/* Conditional template - only when isPending is true - show div mess*/}
      {isPending && <div>Please wait a moment...</div>}
      {/* <BlogList blogs={blogs} title="All Blogs" /> */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

/* We're passing the blogs as a prop to the BlogList. Inside the BlogList component, we're trying to map through the blogs being handed down. However this is now asynchronous, so it takes some time for the request to happen. The initial value is null, so when the browser loads up, it trys and fails to map through null. 
- We dont want to out put line 32, until we have a value for blogs. To combat this we can use blogs &&. This is conditional templating. Logical and '&&', evalutes the left first, if this is false it doesnt execute to the right. To begin with, blogs to the left is null, - false, so the right code doesn't execute.'*/

/* useEffect runs a fn every render of the component, every time something changes. It re-renders the DOM to update the state change. 

fetch data or communicate with authentication service - side effects 


[
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]*/

// https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=18
//- cannot read property 'map' of null -
