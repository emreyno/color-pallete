import './App.css';
import { Route, Switch } from 'react-router';
import  Homepage  from './components/homepage/Homepage';
// import Display from './components/display/Display';
import Login from './components/login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="app-container">
       
       <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/">
          <Homepage/>
        </PrivateRoute>
      </Switch>

        
    </div>
  );
}

export default App;
