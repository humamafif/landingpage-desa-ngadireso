import NewsContent from "../components/NewsContent";

export default function News() {
    return (
        <div id="news" className="relative w-screen min-h-screen flex flex-col items-center bg-canvas px-4 text-white">
            <h1 className=" font-extrabold text-3xl lg:text-6xl mt-32 text-center uppercase">Akses Berita Seputar Ngadireso</h1>
            <p className="font-normal lg:font-medium text-sm lg:text-xl capitalize text-shadow-md mt-3 text-center max-w-xl lg:max-w-7xl mb-14">
                Dapatkan informasi terkini tentang Desa Ngadireso
            </p>
            <NewsContent />
        </div>
    );
}