'use client';

import Head from "next/head";
import Template from "../../../Components/Template/Template";
import Videos from "../../../Components/Videos/Videos";

const getData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/movies/active`);

    if (!response.ok) {
        throw new Error('Failed to retrieve movies from database !');
    }
    return response.json();
}

const Page = async () => {
    const data = await getData();
    const design = (
        <>
            <>
                <Template>
                    <Head>
                        <title>Videos - StreamJust - The Best Video Streaming Services for 2024.</title>
                        <meta name="description" content="There are far more ways to stream video than Amazon Prime Video, Hulu, and Netflix. These are the top streaming services based on price, catalog, features, ..." key="desc" />
                        <meta name="keywords" content="audio, video, Movies, ek tha tiger, car, thrill movies" key="keywords" />
                        <meta property="og:title" content="StreamJust - The Best Video Streaming Services for 2024." key="ogtitle" />
                        <meta property="og:description" content="There are far more ways to stream video than Amazon Prime Video, Hulu, and Netflix. These are the top streaming services based on price, catalog, features, ..." key="ogdescription" />
                        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcTXrtJBfK1eObEYBnpVWe5hhRV4PL-U5TyBFw&usqp=CAU" key="ogimage" />
                    </Head>
                    <Videos videos={data && data.data} />
                </Template>
            </>
        </>
    );
    return design;
}

export default Page;