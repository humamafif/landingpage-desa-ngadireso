export default function Modal({ isVisible, onClose, src, title, description }) {
    if (!isVisible) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
            <div className="bg-white p-8 rounded-lg lg:w-1/2 w-full relative text-black mx-4 h-1/2" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-1 right-1 lg:top-4 lg:right-4 lg:hover:bg-canvas lg:hover:text-white lg:border-2 border-canvas lg:rounded-md px-2 pb-1 font-bold transition-transform transform hover:scale-105" onClick={onClose}>x</button>
                <div className='flex lg:flex-row flex-col items-start h-full'>
                    <img src={src} alt={title} className="w-full lg:w-1/2 lg:h-full h-1/2 mb-4 lg:mb-0 object-cover rounded-lg" />
                    <div className="flex flex-col lg:w-1/2 lg:pl-4 h-full overflow-auto lg:mt-5">
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                </div>
            </div>
        </div>
    );
}