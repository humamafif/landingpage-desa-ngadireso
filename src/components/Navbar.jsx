import Logo from "./Logo";
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent z-20 py-6 lg:py-4 px-4">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Logo />
                <ul className="hidden space-x-10 lg:flex text-lg font-bold text-white text-shadow-md mr-8">
                    <li><a href="#" className="hover:text-gray-300">Beranda</a></li>
                    <li><a href="#about" className="hover:text-gray-300">Tentang</a></li>
                    <li><a href="#news" className="hover:text-gray-300">Berita</a></li>
                </ul>
            </div>
        </nav>
    );
};
