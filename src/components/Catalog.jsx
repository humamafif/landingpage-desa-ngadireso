import { useState } from 'react';
import data from "../data/catalog";
import Card from "./Card";
import Modal from './Modal';

export default function Catalog() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState({ src: '', title: '', description: '', gmapsLink: '' });

    const handleCardClick = (src, title, description, gmapsLink) => {
        setPopupData({ src, title, description, gmapsLink });
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 w-screen lg:px-14 px-6">
            {data.slice(0, 4).map((card, index) => (
                <div key={index} onClick={() => handleCardClick(card.src, card.title, card.description, card.gmapsLink)}>
                    <Card
                        src={card.src}
                        title={card.title}
                        description={card.description}
                        isDescriptionVisible={false}
                    />
                </div>
            ))}
            <Modal
                isVisible={isPopupVisible}
                onClose={closePopup}
                src={popupData.src}
                title={popupData.title}
                description={popupData.description}
                gmapsLink={popupData.gmapsLink}
            />
        </div>
    );
}