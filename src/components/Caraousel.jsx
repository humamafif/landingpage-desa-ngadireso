import { useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';
import Modal from './Modal';
import image1 from '/assets/images/ayam_segar_sarepo.jpg';
import image2 from '/assets/images/bakso.jpg';
import image3 from '/assets/images/farel_roster.jpg';
import image4 from '/assets/images/omah_sempol.jpg';

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ModalData, setModalData] = useState({ src: '', title: '', description: '', gmapsLinks: "" });

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
                    dots: false
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

    const images = [image1, image2, image3, image4];
    const titles = ["Ayam Segar Sarepo", "Bakso dan Mie Ayam Mbak Widya", "Farel Roster", "Omah Sempol"];
    const descriptions = [
        "Ayam Segar Potong Sarepo adalah rumah potong ayam di Desa Ngadireso, Kecamatan Poncokusumo, Kabupaten Malang. Kami menyediakan ayam potong segar setiap hari dengan proses yang higienis untuk menjamin kualitas terbaik. Selain melayani kebutuhan masyarakat sekitar, kami juga menjadi mitra andalan bagi usaha kuliner dan pedagang ayam di wilayah sekitar.",
        "Bakso dan Mie Ayam Mbak Widya adalah tempat makan favorit di Desa Ngadireso yang menyajikan hidangan bakso dan mie ayam dengan cita rasa khas. Dibuat dari bahan-bahan segar dan bumbu pilihan, setiap mangkuk menawarkan rasa yang lezat dan memuaskan. Kami melayani pelanggan dengan porsi yang pas, harga terjangkau, dan suasana yang ramah.Cocok untuk dinikmati bersama keluarga atau teman, Bakso dan Mie Ayam Mbak Widya siap menjadi pilihan terbaik untuk melepas lapar kapan saja.",
        "Farel Roster adalah UMKM yang bergerak di bidang produksi dan penjualan bahan bangunan di Desa Ngadireso, Kecamatan Poncokusumo, Kabupaten Malang. Kami spesialis dalam pembuatan roster dan berbagai jenis kusen berkualitas tinggi, yang cocok untuk kebutuhan konstruksi maupun dekorasi bangunan. Dengan menggunakan bahan terbaik dan tenaga ahli berpengalaman, kami memastikan setiap produk memiliki daya tahan yang kuat dan desain yang rapi.Farel Roster juga melayani pesanan dalam jumlah kecil maupun besar, menjadikan kami mitra terpercaya untuk proyek pembangunan Anda.",
        "Omah Sempol adalah UMKM pelopor jajanan sempol ayam di Desa Ngadireso, Kabupaten Malang. Produk dibuat langsung di Ngadireso dengan bahan berkualitas untuk menjaga cita rasa khas. Kami melayani pelanggan setiap hari di depan Bank BCA Tumpang, mulai pukul 14.00 hingga 22.00 WIB."
    ];

    const gmapsLinks = [
        "https://maps.app.goo.gl/tqkUNDJ2PS8SBQ5MA",
        "https://maps.app.goo.gl/YFaedyuD7TDnA2Hq6",
        "https://maps.app.goo.gl/ibGBjZsupXdGqDpz5",
        "https://maps.app.goo.gl/MzdtcQc8XmSKASPFA",
    ]

    const getOpacityClass = (index) => {
        const middleIndex = Math.floor(settings.slidesToShow / 2);
        const adjustedIndex = (activeSlide + middleIndex) % images.length;
        return index === adjustedIndex ? 'lg:opacity-100 opacity-100' : 'lg:opacity-25 opacity-100';
    };

    const handleCardClick = (src, title, description, gmapsLink) => {
        setModalData({ src, title, description, gmapsLink });
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="carousel-container my-8" style={{ maxHeight: '300px' }}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className={`transition-opacity duration-500 ${getOpacityClass(index)} p-4`} onClick={() => handleCardClick(src, titles[index], descriptions[index], gmapsLinks[index])}>
                        <Card
                            src={src}
                            title={titles[index]}
                            description={descriptions[index]}
                            isDescriptionVisible={false}
                            gmapsLink={gmapsLinks[index]}
                        />
                    </div>
                ))}
            </Slider>
            <Modal
                isVisible={isModalVisible}
                onClose={closeModal}
                src={ModalData.src}
                title={ModalData.title}
                description={ModalData.description}
                gmapsLink={ModalData.gmapsLink}
            />
        </div>
    );
}