import React from 'react';

import AppendDots from './test.js';

import photoOne from "../assets/img/01.jpg";
import photoTwo from "../assets/img/02.jpg";
import photoThree from "../assets/img/03.jpg";
import photoFour from "../assets/img/04.jpg";
import photoFive from "../assets/img/05.jpg";
import photoSix from "../assets/img/06.jpg";
import photoSeven from "../assets/img/07.jpg";
import photoEight from "../assets/img/08.jpg";

const Photo = () => {

    let photoCollection =[];
    photoCollection.push(photoOne);
    photoCollection.push(photoTwo);
    photoCollection.push(photoThree);
    photoCollection.push(photoFour);
    photoCollection.push(photoFive);
    photoCollection.push(photoSix);
    photoCollection.push(photoSeven);
    photoCollection.push(photoEight);

    return (
       <div className='photo'>
           <AppendDots photo={photoCollection}/>
       </div>
    )
};

export default Photo;