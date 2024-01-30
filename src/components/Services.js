import React from 'react';
import axios from 'axios';
import Crad from './Crad';

function Services() {


    const checkouthandler = async (amount) => {

        const { data: { key } } = await axios.get('http://localhost:4000/api/getkey');
        const { data: { order } } = await axios.post('http://localhost:4000/api/checkout', {
            amount
        })



        const options = {
            key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Sagar Bawanthade Services",
            description: "Buy the best services at affordable prices",
            image: "https://avatars.githubusercontent.com/u/137410094?v=4",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "https://localhost:4000/api/paymentverification",
            prefill: {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        var razor = new window.Razorpay(options);

        razor.open();
    }

    return (
        <>
            <h1 id='servicesh1'> Services</h1>
            <div id='services'>

                <div className='left'>

                    <Crad service={"1.Web Developemnt"} description={"We offer custom web development services, creating responsive and user-friendly websites tailored to your business needs."} amount={5000} checkouthandler={checkouthandler} />
                    <Crad service={"2.Deployment/Hosting"} amount={10000} description={"Deploy or Host your aplication on fastest server at affordable prices with newest technology"} checkouthandler={checkouthandler} />
                    <Crad service={"3.App Development"} amount={8000} description={"We offer you custom App Development service, creating dynamic scalable app for your business "} checkouthandler={checkouthandler} />

                    <div>
                        <p style={{ color: "red", marginTop: "5rem", marginBottom: "-5rem" }}>See Loacation on Map</p>
                        <iframe title='dont knoe' width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Akurdi%20railway%20station+(Software%20Development%20Services)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe></div>
                </div>
            </div>



        </>
    )

}



export default Services;