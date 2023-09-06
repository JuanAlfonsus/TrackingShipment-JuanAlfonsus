import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200">
            <div className="flex items-center justify-between mx-auto p-4 container">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tracking Shipment</span>
                </a>
                <ul className="flex space-x-4">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about-me'}>About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}