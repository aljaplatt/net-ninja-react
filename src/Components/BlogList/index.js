// blogs being passed in from Home - we have to do this to as the blogs arr is not defined in this file. By adding blogs on line 2 - it becomes available from the props obj.
const BlogList = ({ blogs, title, handleDelete }) => {
  /* The data is in Home, as is the state. We need to use the setBlogs method to update the state, not mutate the array or edit the blogs prop.
const handleDelete = (id) => {
   therefore it is better to define this fn in the Home component. and accept it as a prop here - line 2} */

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

/* If we want the user to be able to delete these blogs by clicking on a button 
we use the onClick event handler = fn. We want to pass in an argument,so we must make it anonymous () =>. We will want to pass in the ID of the blog we want to delete so we can find it in the arr*/

/* We now need to create the handle Delete fn, but where is best to create it? */
