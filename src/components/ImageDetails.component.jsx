import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"

const ImageDetails = props => {

  return (
    <div id = "details">
      <img src= {props.image} alt = {props.texte} /> 
      <div className='legende'>
        {props.texte}
      </div>
      <input
        id="filtre" type="text" placeholder="filtre image..."
        value = {props.filterText}
        onChange = { (event)=>props.setFilterText( event.target.value ) } 
      />
    </div>
  );
}   
export default ImageDetails;
