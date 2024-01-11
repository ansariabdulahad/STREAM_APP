import { Button, Card } from "../../Tailwind";

// FETCH DATA USING FETCH FUNCTION -- USE THIS FUNCTION WHEN DATA WILL SHOW IN SEARCH FUNCTIONALITY -- BEFORE LOGIN -- AFTER LOGIN USE SWR
const getData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/plan`);

    if (!response.ok) {
        throw new Error('Could not get data from server');
    }

    return response.json();
}

const Plans = async () => {

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
                <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 p-8 sm:p-16">
                    {
                        data && data.data.map((item, index) => {
                            return <AllPlans key={index} item={item} index={index} />
                        })
                    }
                </div>
            </>
        </>
    );
    return design;
}

export default Plans;