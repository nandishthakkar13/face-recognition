import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({imageUrl,box}) => {

return(

    <div className='div-container'>
        <div className='image-container'>
            <img alt='' id="face-image" className='image-box' src={imageUrl}/>
            <div className='bounding-box' style={{top:box.top_row, bottom: box.bottom_row, left: box.left_col, right: box.right_col}}></div>
        </div>
    </div>
);
}

export default FaceRecognition;