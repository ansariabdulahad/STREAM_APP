import Link from "next/link";
import { Button } from "../../Tailwind";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

const Videos = async ({ videos }) => {

    const [Videos, setVideos] = useState(videos);
    const [skip, setSkip] = useState(0);

    const pathname = usePathname();

    useEffect(() => {
        if (skip > 0) {
            const request = async () => {
                const response = await axios({
                    method: 'GET',
                    url: `/api/movies/active?skip=${skip}`
                });

                const { movies } = response.data.data;

                // Two ways to update the movies 
                // 1st type
                setVideos({ ...Videos, movies: [...Videos.movies, ...movies] });

                // 2nd type
                // setVideos((oldData) => {
                //     return {
                //         ...oldData,
                //         movies: [...oldData.movies, ...movies]
                //     }
                // })
            }
            request(); // calling...
        }
    }, [skip]);

    useEffect(() => {
        window.onscroll = () => {
            if ((window.innerHeight + window.scrollY) >= 1000) { // document.body.offsetHeight
                if (skip < Videos.total) {
                    let add = skip + 12;
                    let result = Videos.total - add;
                    if (result < 0) {
                        add = (add + result) - 1;
                    }
                    setSkip(add);
                }
            }
        }
    }, [skip]);

    const design = (
        <>
            <>
                <div className="container p-8 sm:p-16">
                    <h2 className="text-2xl font-bold mb-4 capitalize">{pathname.slice(1)} <sup className="font-thin">{skip} / {Videos.total}</sup></h2>
                    <div className="grid sm:grid-cols-4 gap-8">
                        {
                            Videos.movies && Videos.movies.map((item, index) => (
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
                                            {(item.duration / 60).toFixed(2)} Min
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