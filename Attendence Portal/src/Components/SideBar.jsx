import React, { useEffect, useState } from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsClipboard2Pulse } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
// import { usePathname } from 'next/navigation';
const SideBar = () => {


    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const pathname = usePathname();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // const isActive = (path: String) => pathname === path;
    return (
        <>

            <div className="flex flex-col h-screen bg-gray-100">
                <div className='h-full'>
                    {/* Sidebar */}
                    <aside className={`bg-white shadow-md h-full ${isSidebarOpen ? 'w-64' : 'w-20'} lg:w-64 lg:h-full`}>
                        <nav className="flex flex-col mt-6 px-2 space-y-2 text-gray-400 text-sm ">
                            <div className="lg:hidden px-4 py-1 h-full">
                                <button onClick={toggleSidebar} className="text-gray-700">
                                    {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                                </button>
                            </div>
                            {isSidebarOpen && <p>MANAGE</p>}
                        
                             <div className="flex gap-2 block py-2 h-full lg:h-full px-4 rounded  hover:bg-blue-50 text-blue-600">
                             <LuFileSpreadsheet className='text-2xl  ' />
                            {isSidebarOpen && <a href={"/dashboard/attendance"} className="text-lg ">Tasks</a>}
                             </div>
                        
                            {isSidebarOpen && <p className='text-gray-400 text-sm'>ANALYZE</p>}
                               <div className="flex block py-2 px-4 rounded gap-2  hover:bg-blue-50 text-blue-600">
                                <BsClipboard2Pulse className="text-2xl" />
                                {isSidebarOpen && <a href={"/dashboard"} className="text-lg">Dashboard</a>}
                               </div>
                                <div className="flex block py-2 px-4 rounded gap-2  hover:bg-blue-50 text-blue-600">
                                <TbReportSearch className="text-2xl" />
                                {isSidebarOpen && <a href={"/dashboard/report"} className="text-lg">Report</a>}
                                </div>
                            
                            {isSidebarOpen && <p className='text-gray-400 text-sm'>TRACK</p>}
                                <div className="flex block py-2 px-4 rounded gap-2  hover:bg-blue-50 text-blue-600 ">
                                <PiStudentBold className="text-2xl" />
                                {isSidebarOpen && <a href={"/dashboard/student"} className="text-lg">Tasks Record</a>}
                                </div>
                               <div className="flex block py-2 px-4 rounded gap-2 hover:bg-blue-50 text-blue-600">
                                <MdLogout className="text-2xl" />
                                {isSidebarOpen && <a href={"/"} className="text-lg">Logout</a>}
                                </div>
                           
                        </nav>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default SideBar;

