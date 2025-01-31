import Carousel from "../components/Caraousel";

export default function Umkm() {
    return (
        <div id="umkm" className="text-white w-screen min-h-fit items-center px-4 pt-1">
            <h1 className=" font-extrabold text-3xl lg:text-6xl mt-32 text-center">UMKM DESA NGADIRESO</h1>
            <p className="font-normal lg:font-medium text-sm lg:text-xl capitalize text-shadow-md mt-3 text-center max-w-xl lg:max-w-7xl mx-auto">
                UMKM di Desa Ngadireso berkembang pesat dan menjadi salah satu pilar utama perekonomian, didukung oleh semangat wirausaha masyarakat serta potensi lokal yang terus dikembangkan
            </p>
            <Carousel />
        </div >
    )
}