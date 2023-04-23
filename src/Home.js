import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './hook/useFetch';

const Home = () => {
  // in order to create changable variable, we use state hook
  // returns a stateful var name, and a function setname to update the state
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(10);
  const [blogs, setBlogs] = useState([
    {
      title: 'plain text',
      body: 'plain body',
      author: 'plain',
      id: 1,
    },
  ]);

  const clickHandler = () => {
    setName('luigi');
    setAge(30);
  };
  const clickHanderWithArgs = args => {
    console.log(args);
  };
  const clickHandlerWithEvent = (args, event) => {
    console.log(args, event);
  };
  const deleteHandler = id => {
    const newblog = blogs.filter(blog => blog.id !== id);
    setBlogs(newblog);
  };

  // in order to watch state changing, we use effect hook
  // this hook is triggered whenever the dom is rendered
  // i.e. certain state changes in denpendency list
  useEffect(
    () => {
      console.log('use effect triggered', 'name is changed');
    },
    [name] // dependency list
  );

  // use customised hook to retrieve data form db
  const {
    data: blogsFromDB,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      <h2>homepage</h2>
      <p>
        {name} is {age} years old.
      </p>

      {/* cannot register with parenthesis, that will invoke clickhandler immediately */}
      {/* <button onclick={clickhandler()}>click me</button> */}
      <button onClick={clickHandler}>click me</button>

      {/* how to pass args to clickhander without being invoked? */}
      <button onClick={() => clickHanderWithArgs('something')}>
        click me too
      </button>

      {/* note that every function is registered with an event */}
      <button onClick={event => clickHandlerWithEvent('something', event)}>
        click me three
      </button>

      {/* pass var using property */}
      <BlogList
        blogs={blogs}
        title="All Blog"
        deleteHandler={deleteHandler}></BlogList>

      {/* reuse bloglist component, filter can be used for search */}
      <BlogList
        blogs={blogs.filter(blog => blog.author === 'mario')}
        title="Mario's Blog"
        deleteHandler={deleteHandler}></BlogList>

      {/* make blogs dynamic and short-circuited
          because it takes some time to fectch data from db.
          and during that period, blogsfromdb is passed into bloglist as null
          which causes error render
      */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogsFromDB && ( // untill blogfromdb is fetched
        <BlogList
          blogs={blogsFromDB} // <== if not shorted, this will be null
          title="Blogs from DB"
          deleteHandler={deleteHandler}></BlogList>
      )}
    </div>
  );
};

export default Home;
