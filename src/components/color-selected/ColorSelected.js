
import './colorSelected.css';
import { useSelector } from 'react-redux';
import ColorDisplay from './ColorDisplay';
const ColorSelected = () => {

    const state = useSelector(state => state.color.colors);

    const colors = state.map((palette, index) => (
        <ColorDisplay
            key={index}
            colors={palette}
            index={index}
            
        />
      ));

    return (
      <div className="colorSelected-container">

          {colors}

      </div>
    );
  }
  
  export default ColorSelected;
  