import Catalog from "./Catalog";

export default function About() {
    return (
        <div id="about" className="relative w-screen min-h-screen flex flex-col items-center bg-canvas px-4 text-white">
            <h1 className=" font-extrabold text-3xl lg:text-6xl mt-32 text-center">TENTANG DESA NGADIRESO</h1>
            <p className="font-normal lg:font-medium text-sm lg:text-xl capitalize text-shadow-md mt-3 text-center max-w-xl lg:max-w-7xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus dolor illum ipsam deserunt optio culpa, saepe vel, qui veritatis minima velit consequatur, cum voluptatibus autem est maiores quam iste magnam unde debitis aut molestiae.
            </p>
            <div className="flex">
                <Catalog />
            </div>
        </div>
    );
}