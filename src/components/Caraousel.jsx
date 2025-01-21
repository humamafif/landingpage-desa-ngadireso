import { useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';
import image1 from '../../public/assets/images/karmel.png';
import image2 from '../../public/assets/images/kebun.png';
import image3 from '../../public/assets/images/kebun.png';

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState({ src: '', title: '', description: '' });

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [image1, image2, image3];
    const titles = ["Karmel", "Kebun", "Umbulan"];

    const getOpacityClass = (index) => {
        const middleIndex = Math.floor(settings.slidesToShow / 2);
        const adjustedIndex = (activeSlide + middleIndex) % images.length;
        return index === adjustedIndex ? 'lg:opacity-100 opacity-100' : 'lg:opacity-50 opacity-100';
    };

    const handleCardClick = (src, title, description) => {
        setPopupData({ src, title, description });
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="carousel-container my-8">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className={`transition-opacity duration-500 ${getOpacityClass(index)} p-4 cursor-pointer`} onClick={() => handleCardClick(src, titles[index], "Lorem ipsum dolor sit amet.")}>
                        <Card
                            src={src}
                            title={titles[index]}
                            description="Lorem ipsum dolor sit amet."
                        />
                    </div>
                ))}
            </Slider>
            {isPopupVisible && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-lg w-full flex text-black justify-around items-start">
                        <button className="absolute top-4 right-4 text-white" onClick={closePopup}>X</button>
                        <img src={popupData.src} alt={popupData.title} className="w-1/2 h-auto mb-4" />
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{popupData.title}</h2>
                            <p>{popupData.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}