
function HeroSection() {
  return (
    <>
    <div className=" container w-full h-fit  bg-gradient-to-r from-cyan-500 to-blue-500 lg:h-96 md:h-72">
      <div className='flex justify-center  p-40 sm:p-16 '>
        <input type="text" placeholder='search for food' className='w-[60%] h-[40px] rounded p-2 border border-black text-lg font-bold capitalize lg:mt-20 md:mt-10' />
        <button className='ml-5 border border-pink-500 bg-pink-500 w-[80px] rounded text-white font-bold capitalize lg:mt-20 md:mt-10'>search</button>
      </div>
    </div>
    </>
  )
}
 
export default HeroSection