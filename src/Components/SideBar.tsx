import {useEffect, useRef, useState} from "react";
import { FaBook, FaCloud, FaCode, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown, IoMdSettings } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const SideBar = () => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const isMobileRef = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            const isMobileLocal = width < 768
            if(isMobileLocal){
                setIsMobile(true)
                isMobileRef.current = true
            }else{
                setIsMobile(false)
                isMobileRef.current = false
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <div className="flex flex-col w-full md:w-64 bg-white md:h-screen border-r relative z-20">
            <div className={`flex justify-between md:justify-around w-full px-4 items-center`}>
                <div className="flex items-center justify-center gap-4 h-16">
                    <img src={'/svg/logo.svg'} alt={'logo'} className={`w-6`}/>
                    <h1 className="text-lg font-semibold">CodeAnt AI</h1>
                </div>

                <div className={`flex md:hidden`}>
                   <button className={``} onClick={()=>{setIsSideBarVisible(prevState => !prevState)}}>
                        {isSideBarVisible ? <RxCross2 /> : <RxHamburgerMenu />} 
                   </button>
                </div>
            </div>

            <div
                className={`absolute md:static bottom-0 w-full h-screen md:h-full bg-black/10 translate-y-full md:translate-y-0 flex overflow-hidden transition-all `}
                style={{
                    height: isMobile ? (isSideBarVisible ? 'calc(100vh - 64px)' : '0px') : '100%',
                }}
            >
                <div
                    className={`bg-white w-full h-fit md:h-full flex flex-col`}>
                    <div className="flex flex-col items-center py-4">
                <span className="mt-2 w-11/12 text-sm border p-2 rounded-xl flex gap-2 items-center justify-between ">
                    <span>UtkarshDhairyaPanwar</span>
                    <IoIosArrowDown />
                </span>
                    </div>

                    <nav className="flex-1 px-4 font-medium py-2 space-y-2">
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm bg-[#1570EF] text-white rounded-lg"
                        >
                            <IoHomeOutline className="text-lg" />
                            <span className="ml-3">Repositories</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <FaCode className="text-lg"/>
                            <span className="ml-3">AI Code Review</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <FaCloud className="text-lg"/>
                            <span className="ml-3">Cloud Security</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <FaBook className="text-md"/>
                            <span className="ml-3">How to Use</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <IoMdSettings className="text-lg"/>
                            <span className="ml-3">Settings</span>
                        </a>
                    </nav>

                    <div className="px-4 py-4">
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <FaPhoneAlt className="text-md"/>
                            <span className="ml-3">Support</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <MdOutlineExitToApp className="text-lg" />
                            <span className="ml-3">Logout</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;