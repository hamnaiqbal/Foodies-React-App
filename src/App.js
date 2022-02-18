import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Top from "./Components/TopPicks/Top";
import Find from "./Components/Find/Find";
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';


const App = () => {

  return (
    <>
      <div className='main-content'>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/top" component={Top} />
          <Route exact path="/Find" component={Find} />
        </Switch>
      </div>
    </>
  );
}

export default App;
