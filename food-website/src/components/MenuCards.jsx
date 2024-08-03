import React from 'react'

function MenuCards({image, title, desc, price}) {
  return (
    <>
 <div className='border border-white bg-white w-fit h-fit flex gap-3 rounded-lg p-3 '>
      <div className="w-28 h-20 m-3 rounded "  style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      </div>
      <div className="w-fit  font-bold text-black capitalize ">
      <h2 className="font-extrabold">{title}</h2>
      <h3 className="font-bold">{price}</h3>
      <h4 className="font-semibold">{desc}</h4>
      <button className='w-24 h-7 rounded bg-cyan-800 text-white capitalize font-medium  '>order now</button>
      </div>
 </div>
    </>
  )
}

export default MenuCards