import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"



const ImageWall = props => {
  let imagesFiltered = props.images.filter(elt => elt.texte.toLowerCase().includes( props.filterText ));

  const tabImg = imagesFiltered.map( (elt) => <img src = {elt.image} 
                                       alt = {elt.texte} title = {elt.texte} 
                                      key = {elt.image} 
                                      onMouseOver={() => props.imageChanged(elt.image,elt.texte)}
                                    />);

  return (
    <div id = "mur"> { tabImg }</div>
  );
}   
export default ImageWall;
