// Line 19 - Blogs arr is being passed down as a prop to BlogList component.

// line 14 - we have duplicated the blog list component, and will pass in new data to the second one, using the filter method & a specified condition. The method invokes a callback fn for each item in the array - if true is returned for the condition, it is kept in the array, else it filters it out. A new array is returned with all the kept (true) items.
/* 
For the second component we're going to filter out all posts not from mario. 
Line 20 - we want to pass in a blog, then return true or false to the condition. */

/* Using the map method we can loop through an array and return some template for each item. The method invokes a callback fn for each item, and returns template for each. */

 /* when looping though an array - each item must have a unique id - can use nanid or uuid for example. Key used in line 19. React uses this key to keep track of each item in the DOM. Using this, React will track changes, add or removing items. */
