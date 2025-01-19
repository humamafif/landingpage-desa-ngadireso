export default function Logo() {
    return (
        <div className="text-lg font-bold flex items-center">
            <img
                className="w-8 lg:w-20"
                src="../../public/assets/images/logo_kabupaten_malang.png" alt="" />
            <div className="text-white font-extrabold lg:text-2xl text-xs ml-2">
                <p className="text-shadow-md">Desa Ngadireso</p>
                <p className="text-shadow-md">Poncokusumo - Kab.Malang</p>
            </div>

        </div>
    );
}