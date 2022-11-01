import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
        <div className='text-center mb-4'>
            <p className="text-3xl font-bold text-orange-600 mb-4">Services</p>
            <h2 className="text-4xl font-semibold mb-5">Our Service Area</h2>
            <p className='mb-8'>the majority have suffered alteration in some form,  by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
        <div className='grid gap-6 service grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    </div>
    );
};

export default Services;