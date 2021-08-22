import './color.css';
import { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

const Color = () => {
    
    const [color,setColor] = useState('');
    const [error,setError] = useState(false);
    const [list,setList] = useState([]);


    const handleSubmit = (e) =>{
        e.preventDefault(); 

        try {
            let colors = new Values(color).all(10)
            setList(colors)
            console.log(colors)
        }

        catch (error) {
            setError(true)
            console.log(error)
        }

    }
    
    return (
      <div className="Color-container">
          <div className="color-head-con"> 
                <h3>Color generator</h3>
                <form className="color-form"onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder='#f15025'
                    className={`${error ? 'error' : null}`}
                />
                <button className='select-btn' type='submit'>
                    submit
                </button>
                </form>
          </div>

          <div className="color-body-con">
                {list.map((color,index)=>{
                    return  <SingleColor
                    key={index}
                    {...color}
                    index={index}
                    hexColor={color.hex}
                  />
                })}
          </div>
      </div>
    );
  }
  
  export default Color;
  