import React from 'react'

function Card({ amount, checkouthandler, service, description }) {
    return (
        <div className='service1'>
            <h4>{service}</h4>
            <p4>{description}</p4><br />
            <p4>INR&nbsp;{amount}</p4><br />
            <button /*onClick={() => checkouthandler(amount) }*/>Buys the services</button >
        </div>
    )
}

export default Card;