import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({id,title,url}) => {

    //console.log(id,title,url);
    return (
        <div className='card animate__animated animate__fadeIn'>
          <img src={url} alt={title}/>
             <p>{title}</p>
        </div>
    )
}
//  {img.title} 

/* 1. Enzyme
   2. Enzyme to json
   3. debe de mostrar el componente correcto
    shallow
    wrapper
    wrapper .toMatchSnapshot()
*/

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  
}