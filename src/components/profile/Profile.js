import './profile.css';
import '../display/display.css'
import { useSelector,useDispatch } from 'react-redux';

const Palette = () => {

    const dispatch = useDispatch()
 

    const state = useSelector(state => state.user.loginUsers);
    console.log(state)

    let greeting = `Hello ${state.name}!`;
    return (
        <div 
        className="display-container"
        >
            <div className="header">
  
                <h1 className="palette-text">Profile</h1>

                <h2>{greeting}</h2>
                
  
            </div>
  
              <div className="content">
  
                  <div className="palette-con">
                      
                 </div>
  
                  <div className="color-con">
                      
                  </div>
  
              </div>
  
  
  
           
        </div>
    );
  }
  
  export default Palette;
  