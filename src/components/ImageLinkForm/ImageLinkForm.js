import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({value,onInputChange, onButtonSubmit}) =>{
    return(

        <div>
            <p>{'This Magic Brian will detect faces in your pictures. Give it a try!'}</p>
            <div className='center'>
            <div className='form-container center'>
            <input type='text' className='input'value={value} onChange={onInputChange}/>
            <button className='button-detect' onClick={onButtonSubmit}>Detect</button>
            </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;