
import './login.css';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { useState } from 'react';
import { login } from '../../redux/reducers/UserReducer';





const Login = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const state = useSelector(state => state.user.users);

    const[user,setUser]=useState('');
    const[password,setPassword]=useState('');
   
     const submitTaskHandler = () => {
        if(user===''){
           alert("fill-out all the fields");
        }
        else if(password===''){
            alert("fill-out all the fields");
        }
        else{

            if(userIndex === 0 && passIndex === 0 ){
                let userData = {
                    username:user,
                    password:password,
                    name:state.name
                }
                console.log(state)
                dispatch(login(state))
                history.push("/")
    
            }
            else{
                alert("Incorrect User or Password");
            }

           
        }
      }
        const userIndex = state.findIndex( datauser => datauser.username === user);
        const passIndex = state.findIndex( datauser => datauser.password === password);


    return (
      <div className="login-container">
          <h1 className="Title">Splash</h1>
          <h4><i>Your Handy Palette Selector</i> </h4>

          <form className="login-form">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input 
                type="text" 
                class="form-control" 
                id="exampleInputEmail1" 
                value={user} 
                onChange={(e)=>setUser(e.target.value.toLowerCase())}
            />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1"
                value={password} 
                onChange={(e)=>setPassword(e.target.value.toLowerCase())}

            />
            
        </div>
        
        <button 
            type="submit" 
            class="btn btn-primary"
            onClick={submitTaskHandler}
        >Submit</button>

      </form>
        

      </div>
    );
  }
  
  export default Login;
  