import Link from "next/link";
import { Button } from "../../Tailwind";

const getData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/movies/active`);

    if (!response.ok) {
        throw new Error('Failed to retrieve movies from database !');
    }
    return response.json();
}

const Videos = async () => {
    const data = await getData();
    console.log(data);
    const design = (
        <>
            <>
                <div className="container p-8 sm:p-16">
                    <div className="grid sm:grid-cols-4 gap-8">
                        {
                            data && data.data.map((item, index) => (
                                <div key={index} className="relative">
                                    <img src={`${process.env.NEXT_PUBLIC_CLOUDFRONT}/${item.thumbnail}`} width={'100%'} alt="thumbnail" />
                                    <div
                                        className="absolute bottom-0 left-0 w-full p-4"
                                        style={{
                                            background: 'rgba(0,0,0,.7)'
                                        }}
                                    >
                                        <h1 className="text-white text-lg font-bold capitalize">
                                            {item.title}
                                        </h1>
                                        <p className="text-white">
                                            {item.duration}
                                        </p>
                                        <Link href={{
                                            pathname: `/videos/${item.title.toLowerCase().split(" ").join("-")}`,
                                            query: item
                                        }} passHref>
                                            <Button className="mt-2" theme="error">
                                                Play Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        </>
    );
    return design;
}

export default Videos;