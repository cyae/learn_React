import Home from './Home';
import BlogDetails from './BlogDetails';
import Navbar from './Navbar';
import Create from './Create';
import NotFound from './404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // root component
  return (
    <Router>
      <div className="App">
        {/* child component */}
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/create">
              <Create></Create>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
