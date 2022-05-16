import React from 'react';

const Members = ( {memberIndex, data}) => {
  return (
    <div>
      
        {data[memberIndex].map(item =>(
          <div className='member'>
            <p>{item.title}</p>
            <p>{item.nombre} {item.apellido}</p>
            <p>{item.text}</p>
          </div>
        ))}      
    </div>
  )
}

export default Members;