export default function Card({ src, title, description, isDescriptionVisible }) {
    return (
        <div className="relative group overflow-hidden rounded-xl w-full h-60 lg:h-112">
            <img
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src={src} alt={title} />
            <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-3 bg-gradient-to-t from-canvas to-transparent rounded-xl transition-transform duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                <h2 className="text-md lg:text-xl font-bold uppercase pb-2">
                    {title}
                </h2>
                <p className={`text-xs lg:text-sm transition-opacity duration-300 ease-in-out ${isDescriptionVisible ? 'block' : 'hidden'} group-hover:opacity-100 opacity-0`}>
                    {description}
                </p>
            </div>
        </div>
    );
}