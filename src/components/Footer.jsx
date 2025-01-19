import Map from "./Map";

export default function Footer() {
    return (
        <footer className="lg:flex justify-between items-center lg:px-16 mb-10 mt-24 px-4">
            <div className="lg:w-1/2 text-white gap-2">
                <h1 className="uppercase font-extrabold">informasi lebih lanjut</h1>
                <p className="">Hubungi contact person di bawah ini untuk informasi lebih lanjut seputar desa ngadireso dan lainnya.</p>
                <div className="flex gap-2 items-center my-2">
                    <a href=""><img src="../../public/assets/icons/whatsapp.svg" alt="" /></a>
                    <a href=""><img src="../../public/assets/icons/email.svg" alt="" /></a>
                </div>
            </div>
            <div className="lg:w-1/2">
                <Map />
            </div>
        </footer>
    );

}