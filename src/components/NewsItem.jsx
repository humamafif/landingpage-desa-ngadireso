export default function NewsItem({ imageSrc, title, description, link, reverse }) {
    return (
        <div className={`w-screen lg:flex ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-4 lg:px-16 flex flex-col items-center px-4 lg:items-start`}>
            <img
                className="lg:w-1/2 rounded-md"
                src={imageSrc} alt={title} />
            <div className="lg:w-1/2">
                <h2 className="uppercase font-extrabold text-2xl">{title}</h2>
                <p className="lg:font-medium font-normal lg:text-base text-sm text-justify">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-black flex items-center gap-2 p-3 rounded-lg font-medium text-sm mt-3">
                        Baca Selengkapnya <img src="/assets/icons/arrow-right.svg" alt="Arrow Right" />
                    </button>
                </a>
            </div>
        </div>
    );
}