import React from 'react'

function Button({name , imageUrl}) {
  
  return (
    <>
    <div className='mt-4'>
<img src={imageUrl} alt="" />
   <p>title: {name}</p>
</div>
  </>
  )
}



export default Button