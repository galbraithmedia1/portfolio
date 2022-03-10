import React from 'react';
import './feature.css';




const Feature = ({title, text, img}) => (
    
        <div className='gpt3__features-container__feature'>
            <div className='gpt3__features-container__feature-title'>
                <h1>{title}</h1>
              <img src={img} alt=''
               />
            </div>
            <div className='gpt3__features-container_feature-text'>
                <p>{text}</p></div>
          
        </div>
    
)

export default Feature

   
