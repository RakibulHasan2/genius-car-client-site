import React from 'react';
import './ServiceCard.css'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    const {_id,img, price, title} = service;
    return (
        <div className="card card-compact w-92 bg-base-100 service-body">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{title}</h2>
            <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
            <div className="card-actions justify-end">
                <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary">Buy Now
                <FaShoppingCart className='ml-3'></FaShoppingCart>
                </button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;