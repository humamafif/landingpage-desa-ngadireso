import Catalog from "../components/Catalog";

export default function About() {
    return (
        <div id="about" className="relative w-screen min-h-screen flex flex-col items-center bg-canvas px-4 text-white">
            <h1 className=" font-extrabold text-3xl lg:text-6xl mt-32 text-center">TENTANG DESA NGADIRESO</h1>
            <p className="font-normal lg:font-medium text-sm lg:text-xl  text-shadow-md mt-3 text-center max-w-xl lg:max-w-7xl">
                Desa Ngadireso di Kecamatan Poncokusumo, Kabupaten Malang, terletak di kaki Gunung Semeru dan didominasi oleh aktivitas pertanian, peternakan, UMKM, serta beberapa tempat wisata. Desa ini terdiri dari dua dusun dengan populasi 4.023 jiwa (data 2025), didukung oleh fasilitas pendidikan, layanan kesehatan melalui posyandu, serta kegiatan keagamaan yang aktif.
            </p>
            <div className="flex">
                <Catalog />
            </div>
        </div>
    );
}