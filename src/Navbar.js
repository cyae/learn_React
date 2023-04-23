import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        {/* Instead of using <a href>, we use <Link to> in react router */}
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>

        {/*         <a
          href="/create"
          // Other than import css files,
          // you can also inject plain css into element attribute(style)
          // as javascript object
            style={{
              color: 'white',
              backgroundColor: '#f1356d',
              borderRadius: '8px',
            }} 
        >
          New Blog
        </a> */}
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
