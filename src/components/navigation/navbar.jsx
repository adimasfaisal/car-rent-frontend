import { useState } from "react"

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(true);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <nav className="bg-projectNavy shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* <!-- Website Logo --> */}
                            <a href="#" className="flex items-center py-4 px-2">
                                {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                                <div className="flex flex-col text-center">
                                    <span className="text-projectOrange text-3xl uppercase font-extrabold">Karen</span>
                                    <span className="text-xs text-projectGray">Trusted Car Rent</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Primary Navbar items --> */}
                    <div className="hidden md:flex items-center space-x-2">
                        <a href="" className="py-4 px-2 text-projectOrange border-b-4 border-projectOrange font-semibold ">Home</a>
                        <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-projectOrange transition duration-300">Bookings</a>
                    </div>
                    {/* <!-- Secondary Navbar items --> */}
                    {/* <div className="hidden md:flex items-center space-x-3 ">
                        <a href="" className="py-2 px-2 font-medium text-gray-500 rounded-xl hover:bg-projectOrange hover:text-white transition duration-500">Log In</a>
                        <a href="" className="py-2 px-2 font-medium text-white bg-projectOrange rounded-xl hover:bg-projectOrange transition duration-300">Sign Up</a>
                    </div> */}
                    {/* <!-- Mobile menu button --> */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleHidden}>
                            <svg className=" w-6 h-6 text-projectGray hover:text-projectOrange "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- mobile menu --> */}
            <div hidden={isHidden} className="mobile-menu lg:hidden xl:hidden">
                <ul className="">
                    <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-projectOrange font-semibold">Home</a></li>
                    <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-projectOrange transition duration-300 text-projectGray">Services</a></li>
                    <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-projectOrange transition duration-300 text-projectGray">About</a></li>
                    <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-projectOrange transition duration-300 text-projectGray">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )
}