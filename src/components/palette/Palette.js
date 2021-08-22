
import './palette.css';


const Palette = ({colors,remove}) => {



    return (
      <div className="palette-container">
          <h3>{colors.hex}</h3>
          <img
          className="palette-remove-icon"
          src="https://image.flaticon.com/icons/png/512/189/189690.png"
          alt="remove"
          onClick={remove}
        />
      </div>
    );
  }
  
  export default Palette;
  