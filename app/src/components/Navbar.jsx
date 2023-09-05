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
                    <li><a href="/" className="hover:text-blue-200 font-sans font-bold">Home</a></li>
                    <li><a href="/about" className="hover:text-blue-200">About</a></li>
                    <li><a href="/contact" className="hover:text-blue-200">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}