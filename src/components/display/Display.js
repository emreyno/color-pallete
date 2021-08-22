import './display.css';
import Color from '../color/Color';
import Palette from '../palette/Palette';
import ColorSelected from '../color-selected/ColorSelected'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeColor } from '../../redux/reducers/ColorReducer';


const Display = () => {

    const state = useSelector(state => state.color.colors);
    const dispatch = useDispatch();
    const [selected,setSelected] = useState(false)

    const removeColorHandler = (id) => {
        dispatch(removeColor(id));
      };

      let colors ="No Color Selected";
    
      if(state.length>0){

        colors = state.map((palette, index) => (
            <Palette
                key={index}
                colors={palette}
                remove = {() => removeColorHandler(index)}
            />
          ));

      }

    

      const swicthHandler = () =>{

            selected?setSelected(false):setSelected(true);

      }


    return (
      <div 
      className="display-container"
      >
          <div className="header">

              <h1 className="palette-text">Splash</h1>
              

          </div>

            <div className="content">

                <div className="palette-con">
                    <h3 className="palette-text">Selected Colors</h3>
                   
                  {colors}
               </div>

                <div className="color-con">
                    <div class="form-check form-switch color-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={swicthHandler}/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Color Selected</label>
                    </div>
                    
                    {selected?<ColorSelected/>: <Color/>}
                   
                </div>

            </div>



         
      </div>
    );
  }
  
  export default Display;
  