import './color.css';

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addColor } from '../../redux/reducers/ColorReducer';
// import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {

  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false)
  const [response, setResponse] = useState("color added to palette")

  const state = useSelector(state => state.color.colors);

  const bcg = rgb.join(',')
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])

 

  const addPaletteHandler = (bcg,hexValue,weight) =>{

    let index = state.findIndex(i => i.hex === hexValue);
    
    if(index>=0){
      setResponse("color already Exist")
      setAlert(true)
    }

    else{

        let color ={
          hex :hexValue,
          rgb :bcg,
          weight:weight,
      }
      setResponse("color added to palette")
      setAlert(true)
      
      dispatch(addColor(color));


    }
    
  }

  
  return (
    <article
      className="color"
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => addPaletteHandler(bcg,hexValue,weight)}
    >
      <div className="selected-text">
        Weight: {weight}%<br/>
        Hexcode: {hexValue}
      </div>
      
      {alert && <div className="alert-text">{response}</div>}
    </article>
  )
}

export default SingleColor
