'use client';

import Head from "next/head";
import Plans from "../../../Components/Plans/Plans";
import Template from "../../../Components/Template/Template";

// FETCH DATA USING FETCH FUNCTION -- USE THIS FUNCTION WHEN DATA WILL SHOW IN SEARCH FUNCTIONALITY -- BEFORE LOGIN -- AFTER LOGIN USE SWR
const getData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/plan`);

        if (!response.ok) {
            throw new Error('Could not get data from server');
        }

        return response.json();
    } catch (error) {
        return [];
    }
}

const Page = async () => {

    const data = await getData();

    const design = (
        <>
            <>
                <Template>
                    <Head>
                        <title>Plans - StreamJust - The Best Video Streaming Services for 2024.</title>
                        <meta name="description" content="There are far more ways to stream video than Amazon Prime Video, Hulu, and Netflix. These are the top streaming services based on price, catalog, features, ..." key="desc" />
                        <meta name="keywords" content="audio, video, Movies, ek tha tiger, car, thrill movies" key="keywords" />
                        <meta property="og:title" content="StreamJust - The Best Video Streaming Services for 2024." key="ogtitle" />
                        <meta property="og:description" content="There are far more ways to stream video than Amazon Prime Video, Hulu, and Netflix. These are the top streaming services based on price, catalog, features, ..." key="ogdescription" />
                        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcTXrtJBfK1eObEYBnpVWe5hhRV4PL-U5TyBFw&usqp=CAU" key="ogimage" />
                    </Head>
                    <Plans plans={(data && data.data) ? data.data : []} />
                </Template>
            </>
        </>
    );
    return design;
}

export default Page;