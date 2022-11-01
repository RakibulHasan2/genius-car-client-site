import React from 'react';
import './ServiceCard.css'
import { FaShoppingCart } from 'react-icons/fa';
const ServiceCard = ({service}) => {
    const {img, price, title} = service;
    return (
        <div className="card card-compact w-92 bg-base-100 service-body">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{title}</h2>
            <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now
                <FaShoppingCart className='ml-3'></FaShoppingCart>
                </button>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;