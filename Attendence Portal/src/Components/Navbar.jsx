import { IoMdNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";

const Navbar = () => {
  return (

    <div className="bg-white flex justify-between p-2 transition-transform shadow-lg">
      <h1 className="text-2xl text-blue-900 leading-tight pl-5  font-semibold">
        CountDown
      </h1>

      <div className="flex justify-start space-x-1 pr-14">
      
          <>

            <div className="flex items-center gap-5">
              <IoMdNotifications size={30} />
              <MdMessage size={25} />
              {<img
            src="./profile image.png"   // Replace with the actual path 
            alt="User Profile"
            width={32}
            height={32}
            className="h-auto rounded-full"
          /> }
            </div>
            <span className="text-md font-bold mt-1">Hoor</span>
          </>
        {/* )} */}

      </div>
    </div>

  );
};
export default Navbar;