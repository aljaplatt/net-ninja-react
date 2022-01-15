import { useState } from "react";

const Home = () => {
  // output the name inside the template on line 13
  //   let name = "mario";
  /*  This fn will change the name, as seen in the console, but not update the JSX template. This is because the variable above is not reactive, it is not being tracked by react. It doesnt trigger react to re-render the template with the new value. We continue to see the old value in the browser - To do this we use useState. */

  /* We use array destructuring to grab 2 values that useState makes available to us. We can name them what we like - state & setState */
  const [name, setName] = useState("mario");
  // we can use this hook mutliple times for different values.
  const [age, setAge] = useState(35);

  const handleClick = () => {
    // name = "luigi";
    // console.log(name);
    // now we can change name in the template using setName - which is reactive - and triggers react to re-render the component
    setName("luigi");
    setAge(21);
  };

  return (
    <div className="home">
      <h2>Home page</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;

// 1. line 5 - i want to react to a auser clicking this button, i want to call a fn when they do.
/* 3. What if we want to pass an argument to the fn ? We cannot use parenthesis as we would normally as this would call the fn immediately. Instead we must wrap the fn in an anonymous fn 
- hello object object - if not */
/* Where we reference a fn, it auto gains the event object (e) as the first parameter - line 2 & 14 

- the fn on line 15 doesnt auto get the event obj, as its not being referenced - however the anonymous fn gets access to the event obj. Then if we want to use it within the 'handleClickAgain fn, we can pass it in as a second argument. We can then use it on line 7.

- This will give us access to the event target property from the event object- e.target */
