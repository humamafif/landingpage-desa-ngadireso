import Carousel from "./Caraousel"

export default function Umkm() {
    return (
        <div className="text-white w-screen min-h-screen items-center px-4">
            <h1 className=" font-extrabold text-3xl lg:text-6xl mt-32 text-center">UMKM DESA NGADIRESO</h1>
            <p className="font-normal lg:font-medium text-sm lg:text-xl capitalize text-shadow-md mt-3 text-center max-w-xl lg:max-w-7xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus dolor illum ipsam deserunt optio culpa, saepe vel, qui veritatis minima velit consequatur, cum voluptatibus autem est maiores quam iste magnam unde debitis aut molestiae.
            </p>
            <Carousel />
        </div >
    )
}