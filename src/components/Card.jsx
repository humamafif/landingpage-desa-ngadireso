export default function Card({ src, title, description }) {
    return (
        <div className="relative w-full h-1/2">
            <img
                className="w-full h-full object-cover rounded-xl"
                src={src} alt="" />
            <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-3 bg-gradient-to-t from-canvas to-transparent rounded-xl">
                <h2 className="text-md lg:text-xl font-bold">
                    {title}
                </h2>
                <p className="text-xs lg:text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}   