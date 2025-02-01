export default function Modal({ isVisible, onClose, src, title, description, gmapsLink }) {
    if (!isVisible) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
            <div className="bg-white p-8 rounded-lg lg:w-1/2 w-full relative text-black mx-4 h-1" style={{ height: "500px" }} onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-1 right-1 lg:top-4 lg:right-4 lg:hover:bg-canvas lg:hover:text-white lg:border-2 border-canvas lg:rounded-md px-2 pb-1 font-bold transition-transform transform hover:scale-105" onClick={onClose}>x</button>
                <div className='flex lg:flex-row flex-col items-start h-full'>
                    <img src={src} alt={title} className="w-full lg:w-1/2 lg:h-full h-1/2 mb-4 lg:mb-0 object-cover rounded-lg" />
                    <div className="flex flex-col lg:w-1/2 lg:pl-4 lg:h-full  lg:mt-5 pb-6 h-56">
                        <h2 className="text-2xl font-bold mb-2 uppercase">{title}</h2>
                        <p className="overflow-auto text-justify" dangerouslySetInnerHTML={{ __html: description }}></p>

                        <a href={gmapsLink} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center text-blue-700 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                <path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"></path><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"></path><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"></path><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"></path><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"></path>
                            </svg>
                            <p className="ml-1 capitalize font-medium">{title}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}