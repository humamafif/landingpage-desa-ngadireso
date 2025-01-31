import Map from "../components/Map";

export default function Footer() {
    return (
        <footer className="lg:flex lg:flex-col justify-between items-center lg:px-16 mb-10 mt-24 px-4">
            <div className="lg:flex lg:w-full justify-between items-center">
                <div className="lg:w-1/2 text-white gap-2 text-lg">
                    <h1 className="uppercase font-extrabold">informasi lebih lanjut</h1>
                    <p className="">Hubungi contact person di bawah ini untuk informasi lebih lanjut seputar desa ngadireso dan lainnya.</p>
                    <div className="flex gap-2 items-center my-2">
                        <a href="https://wa.me/6282338248728" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" />
                        </a>
                        <a href="mailto:ponocukusmongadireso@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/email.svg" alt="Email" />
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Map />
                </div>
            </div>
            <div className="text-center text-white opacity-70 pt-2 lg:mt-0 text-sm w-full">
                <p>&copy; {new Date().getFullYear()} KKM Desa Ngadireso.</p>
            </div>
        </footer>
    );
}