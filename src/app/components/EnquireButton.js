"use client";
import React from 'react';

const EnquireButton = ({ product }) => {
    const handleOrder = (product) => {
        const numberwa = "919766737604";
        const message = `Hello, I am interested in ${product?.name ?? 'this product'}. Could you please provide more details?`;
        const whatsappUrl = `https://wa.me/${numberwa}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div>
            <button
                type="button"
                onClick={() => handleOrder(product)}
                className="px-2.5 py-1 bg-stone-900 text-stone-300 rounded-full font-semibold hover:bg-stone-400 hover:text-black transition duration-300"
            >
                Inquire on WhatsApp
            </button>
        </div>
    );
};

export default EnquireButton;
