'use client';
import React, { useState } from 'react';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import Slider from 'react-slick';

const ListingImageCarousel = () => {
    const [mainImage, setMainImage] = useState("https://images.unsplash.com/photo-1629079448081-c6ab9cbea877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwYXJlYXxlbnwwfHwwfHx8MA%3D%3D");

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const images = [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzYXRhdGUlMjBzYWxlcyUyMGFuZCUyMGFjcXVpc2l0aW9ufGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzYXRhdGUlMjBzYWxlcyUyMGFuZCUyMGFjcXVpc2l0aW9ufGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1629079448081-c6ab9cbea877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwYXJlYXxlbnwwfHwwfHx8MA%3D%3D",
    ];

    return (
        <div className="listing-image-wrap">
            <div className="listing-thumb">
                <a href="/" className="listing-featured-thumb hover-effect">
                    <img
                        src={mainImage}
                        className="img-fluid w-full h-auto object-cover"
                        alt="Main"
                    />
                </a>
                <div className="listing-gallery-wrap on_hover mt-4">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index} className="item px-2">
                                <button onClick={() => setMainImage(img)} className="w-full h-auto focus:outline-none">
                                    <img src={img} alt={`Thumbnail ${index + 1}`} className="img-fluid w-full h-auto object-cover" />
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <MdArrowLeft
            className={`${className} slick-next slick-arrow text-black bg-gray-200 p-2 rounded-full`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <MdArrowRight
            className={`${className} slick-prev slick-arrow text-xl text-black bg-gray-200 p-2 rounded-full`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
};

export default ListingImageCarousel;
