import React from 'react'
import Card from './Card.jsx';

function ExplorePage() {
  return (
    <>
    <div className="  w-full h-96  mb-3 md:mt-[10px] ">
   <h1 className='text-center mt-8 capitalize font-bold text-2xl'>explore food</h1>
   <div className='flex  justify-center gap-9 mt-8 sm:flex-wrap '>
   <Card backgroundImage="https://i.pinimg.com/474x/2c/6e/04/2c6e0474ef6f30cfaf36b4527b4357ff.jpg" title="Fruits"/>
   <Card backgroundImage="https://i.pinimg.com/474x/a5/7b/50/a57b5068f66f901aa3796dc8553f8c33.jpg" title="pizza"/>
   <Card backgroundImage="https://i.pinimg.com/474x/76/9b/15/769b1539645f0ccf0d77d5e8f25a102d.jpg" title="platter"/>
   </div>
    </div>
    </>
  )
}

export default ExplorePage;