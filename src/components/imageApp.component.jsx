import '../assets/style/murImages.css';
import { useState } from 'react';

import dataImages from "../data/dataImages.js"
import ImageWall from './ImageWall.component.jsx';
import ImageDetails from './ImageDetails.component.jsx';


const ImageApp = () => {

  const [image, setImage] = useState(dataImages[3].image);
  const [texte, setTexte] = useState(dataImages[3].texte);
  const [filterText, setFilterText] = useState('');

  const imageChanged = (newImage, newText) => {
    setImage(newImage);
    setTexte(newText);          
  }

  return (
    <div>
      <ImageWall
        filterText = { filterText }
        images = { dataImages }
        imageChanged = { imageChanged }
      />
      <ImageDetails
        image = {image}
        texte = {texte}
        filterText = { filterText }
        setFilterText = { setFilterText }
      />
    </div>
  );
}
export default ImageApp;

