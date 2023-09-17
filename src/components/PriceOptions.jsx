import { MdVerified } from 'react-icons/md';


const PriceOptions = () => {


    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99",
            "features": [
                "Access to cardio equipment",
                "Use of weightlifting area",
                "Locker room access",
                "24/7 gym access",
                "Access to stretching area",
                "Discounts on fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99",
            "features": [
                "Access to all gym areas",
                "Unlimited group fitness classes",
                "Personal trainer sessions (2/month)",
                "Sauna and spa access",
                "Locker with laundry service",
                "Nutritional consultation"
            ]
        },
        {
            "id": 3,
            "name": "Student Membership",
            "price": "$19.99",
            "features": [
                "Access to cardio equipment",
                "Use of weightlifting area",
                "Locker room access",
                "Weekday gym access (9 AM - 5 PM)",
                "Valid student ID required",
                "Access to study area"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h3 className=" text-4xl text-center font-bold my-3">Best Price in the twon</h3>
            <div className="grid md:grid-cols-3 gap-5 my-4">
                {
                    priceOptions.map(option =>
                        <div className="bg-blue-700 rounded-lg shadow-lg shadow-gray-700 p-8 text-white" key={option.id}>
                            <h2 className="text-center">
                                <span className="text-3xl font-extrabold">{option.price}</span>
                                <span className="text-semibold">/Mounth</span>
                            </h2>
                            <h4 className="my-2 text-2xl font-medium text-center">{option.name}</h4>
                            <div className="my-4 text-lg ml-5">
                                {
                                    option.features.map((feature, index) => 
                                    <h4 className='flex gap-3 items-center my-2' key={index}>
                                        <MdVerified className='text-green-500'></MdVerified>{feature}
                                    </h4>)
                                }
                            </div>
                            <button className='mt-5 px-32 py-3 bg-rose-700 text-white rounded-2xl hover:bg-rose-600'>Bye Now</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PriceOptions;