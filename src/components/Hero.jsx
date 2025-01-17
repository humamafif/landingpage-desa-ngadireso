import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <div className="relative w-screen bg-primary-600 min-h-screen h-screen">
            <img
                className="absolute inset-0 object-cover w-full h-full z-0"
                src="../../public/assets/images/hero_image.png"
                alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas to-transparent opacity-100 z-0"></div>
            <div className="relative text-white text-center flex flex-col justify-center items-center h-full mx-3 z-10">
                <TypeAnimation
                    className="font-extrabold text-3xl lg:text-6xl text-shadow-md uppercase inline-block"
                    sequence={[
                        'Sugeng Rawuh',
                        1000,
                        'Selamat Datang',
                        1000,
                        'Welcome',
                        1000,
                        "أَهْلًا وَسَهْلًا",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                <h1 className="font-extrabold text-3xl lg:text-6xl text-shadow-md">
                    DI WEBSITE DESA NGADIRESO
                </h1>
                <p className="font-normal lg:font-medium text-sm lg:text-xl capitalize text-shadow-md mt-3">
                    Mengenal lebih banyak seputar desa kami melalui website ini yuk
                </p>
            </div>
        </div>
    )
}