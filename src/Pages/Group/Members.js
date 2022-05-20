import React from 'react';
import "./MenberStyle.css";

const Members = ( {memberIndex, data}) => {
  return (
    <React.Fragment>
        {data[memberIndex].map(item =>(
          <div className='member'>
            <p className='menber__name'>{item.nombre} {item.apellido}</p>
            <p className='menber__text'>{item.text}</p>
          </div>
        ))}      
    </React.Fragment>
  )
}

export default Members;