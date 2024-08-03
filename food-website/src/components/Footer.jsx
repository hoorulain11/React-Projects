import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
     <div className='text-center font-bold text-black p-3'>
   <div className="icons flex justify-center gap-2 ">
     <FaFacebook  size={"35px"}/>
     <FaSquareInstagram size={"35px"}/>
     <FaTwitter size={"35px"}/> 
   </div>
   <h2 className="font-semibold capitalize">All rights  Reserved Designed by <span className="text-pink-700 capitalize">hoor ul ain</span></h2>
</div>
    </>
  )
}

export default Footer