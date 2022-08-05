import Navbar from './Navbar';
import Home from './Home';
import Create from './create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                 <Home/>
              </Route>
              <Route path="/create">
                 <Create/>
              </Route>
              <Route path="/blogs/:id">
                 <BlogDetails/>
              </Route>
              <Route path="*">
                 <NotFound/>
              </Route>
              
            </Switch>
         </div>
      </div>
    </Router>
    
  );
}

export default App;
