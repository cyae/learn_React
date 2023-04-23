import { Link } from 'react-router-dom';

const BlogList = props => {
  // receive args from props
  const blogs = props.blogs;
  const title = props.title;
  const deleteHandler = props.deleteHandler;

  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {/* loop through list */}
      {blogs.map(blog => {
        return (
          // react use key attr. to keep track of changes to hook elements
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
            </Link>
            <p>Written by: {blog.author}</p>
            <button onClick={() => deleteHandler(blog.id)}>delete blog</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
