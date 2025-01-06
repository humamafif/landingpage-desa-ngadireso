import Logo from "./Logo";
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent z-20 my-6 lg:my-10 mx-4">
            <div className="container mx-auto px-4 py-2 flex justify-between items-start">
                <Logo />
                <ul className="hidden space-x-10 lg:flex text-lg font-bold text-white text-shadow-md">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
