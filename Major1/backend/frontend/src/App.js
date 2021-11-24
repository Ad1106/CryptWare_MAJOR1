import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/resources';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/resources" component={About} exact />
      </Switch>
    </Router>
  );
}

export default App;
