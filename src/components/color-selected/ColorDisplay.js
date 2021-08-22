
import './colorSelected.css';
import { useState, useEffect } from 'react';
const ColorDisplay = ({colors,index}) => {

    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
          setAlert(false)
        }, 1000)
        return () => clearTimeout(timeout)
      }, [alert])

    return (
      <div className="colorSelected-container">
           <article
            className="color"
            style={{ backgroundColor: `rgb(${colors.rgb})` }}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(colors.hex)
              }}
            >
                <div className="selected-text">
                Weight: {colors.weight}%<br/>
                Hex code: {colors.hex}

                </div>
                
            {alert && <div className='alert-text'>Copied to clipboard</div>}
            </article>
      </div>
    );
  }
  
  export default ColorDisplay;
  