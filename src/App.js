import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages.js/Home'
import ImageDetail from './pages.js/ImageDetail';


function App() {
  return (
    <Router> 
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/image/:id"><ImageDetail /></Route>
      </Switch>      
    </Router>
  );
}

export default App;
