
import './homepage.css';
import Display from '../display/Display';
import Profile from '../profile/Profile'
import { Link } from 'react-router-dom';
import { useHistory,Redirect,Route,Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/UserReducer';
const Homepage = () => {

const history = useHistory()
const dispatch = useDispatch()

const logoutHandler = ()=>{
    dispatch(logout())
    history.push("/login")
}

  return (
    <div className="homepage-container">
        <div className="Router-link">
          <nav 
          // className="topnav"
          >
          <ul className="ul-link">
            <li>
              <Link  to="/home"><img class="link-icon" alt="home" src="https://image.flaticon.com/icons/png/512/25/25694.png"></img></Link>
            </li>
            <li>
              <Link  to="/profile"><img class="link-icon"alt="home" src="https://image.flaticon.com/icons/png/512/149/149995.png"></img></Link>
            </li>
            <li>
            <a href="" className="link" onClick={(e) => logoutHandler(e)}><img class="link-icon"alt="home" src="https://image.flaticon.com/icons/png/512/660/660352.png"  /></a>
            {/* <Link  onclick={logoutHandler}><img class="link-icon"alt="home" src="https://image.flaticon.com/icons/png/512/660/660352.png"  /></Link> */}
            </li>
          
          </ul>
        </nav>
        </div>

        <div className="app-content">
        <Switch>
            <Route path="/home" >
            <Display/>
            </Route>
            <Route path="/profile" >
            <Profile/>
            </Route>

            <Route>
                <Redirect to="home" />
            </Route>
        </Switch>

      
        
        
        </div>

        
    </div>
  );
}

export default Homepage;
