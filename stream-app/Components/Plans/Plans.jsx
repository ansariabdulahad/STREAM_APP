import axios from "axios";
import { Button, Card } from "../../Tailwind";
import useRazorpay from "react-razorpay";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const { NEXT_PUBLIC_RAZOR_KEY_ID, NEXT_PUBLIC_RAZOR_KEY_SECRET } = process.env;

// FETCH DATA USING FETCH FUNCTION -- USE THIS FUNCTION WHEN DATA WILL SHOW IN SEARCH FUNCTIONALITY -- BEFORE LOGIN -- AFTER LOGIN USE SWR
const getData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/plan`);

    if (!response.ok) {
        throw new Error('Could not get data from server');
    }

    return response.json();
}

const Plans = async () => {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session } = useSession();
    const [Razorpay] = useRazorpay();

    const data = await getData();

    const colors = [
        {
            backgroundColor: '#FF3CAC',
            backgroundImage: 'linear - gradient(225deg, #FF3CAC 0 %, #784BA0 50 %, #2B86C5 100 %)',
            color: 'white'
        },
        {
            backgroundColor: '#A9C9FF',
            backgroundImage: 'linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)',
            color: 'black'
        },
        {
            backgroundColor: '#FEE140',
            backgroundImage: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
            color: 'black'
        }
    ]

    const purchaseEntry = async (data) => {
        try {
            const response = await axios({
                method: 'POST',
                url: '/api/purchase',
                data: data
            });

            console.log(response.data.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const purchase = async (item) => {

        // CHECK USER IF LOGGED IN OR NOT
        if (!session) {
            return router.push('/login');
        }

        const order = await axios({
            method: 'POST',
            url: '/api/razorpay/order',
            data: {
                amount: item.amount
            }
        });

        const { id } = order.data.data;

        const options = {
            key: NEXT_PUBLIC_RAZOR_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: item.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "StreamJUST",
            description: item.title.toUpperCase() + " PLAN",
            image: '/logo.jpg',
            order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                purchaseEntry({
                    email: session.user.email,
                    planId: item._id,
                    paymentId: response.razorpay_payment_id,
                    orderId: response.razorpay_order_id,
                    signature: response.razorpay_signature
                }); // FUNCTION CALLING TO CREATE PURCHASE IN TABLE
            },
            prefill: {
                name: session.user.name,
                email: session.user.email,
                contact: "9545282408",
            },
            notes: {
                address: "757, yusuf APT 1st flr",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const razor = new Razorpay(options);
        razor.open();
    }

    const AllPlans = ({ item, index }) => {
        const plan = (
            <>
                <>
                    <Card
                        className='relative text-center shadow-lg rounded-xl border p-4'
                    >
                        <h1
                            className="text-3xl mt-16 sm:text-6xl font-bold"
                        >
                            <i className="fa fa-rupee"></i>
                            {item.amount}
                        </h1>
                        <p className="capitalize text-gray-400 text-xl">
                            {item.emi}
                        </p>
                        <div
                            className="my-5"
                            style={{
                                borderBottom: '1px dashed #ccc'
                            }}>
                        </div>
                        <pre
                            style={{
                                fontFamily: 'verdana',
                                lineHeight: '40px',
                                color: '#444'
                            }}
                        >{item.desc}</pre>
                        <Button
                            theme="secondary"
                            className="my-5 rounded-lg"
                            style={{
                                backgroundColor: 'red',
                                color: 'white',
                                ...colors[index]
                            }}
                            onClick={() => purchase(item)}
                        >Buy Now</Button>
                        <div
                            className="text-2xl font-bold uppercase"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                transform: 'translate(-50%, 0)',
                                backgroundColor: 'red',
                                color: 'white',
                                borderBottomLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                                padding: '10px 40px',
                                ...colors[index]
                            }}
                        >{item.title}</div>
                    </Card>
                </>
            </>
        );
        return plan;
    }

    const design = (
        <>
            <>
                <div className="container p-4 sm:p-8">
                    <h2 className="text-4xl font-bold capitalize text-center">{pathname.slice(1)}</h2>
                    <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 p-8 sm:p-16">
                        {
                            data && data.data.map((item, index) => {
                                return <AllPlans key={index} item={item} index={index} />
                            })
                        }
                    </div>
                </div>
            </>
        </>
    );
    return design;
}

export default Plans;