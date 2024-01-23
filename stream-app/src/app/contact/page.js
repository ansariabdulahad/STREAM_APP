'use client';

import Template from "../../../Components/Template/Template";
import ContactForm from "../../../Components/ContactForm/ContactForm";
import Head from "next/head";

const Page = () => {
    const design = (
        <>
            <>
                <Template>
                    <Head>
                        <title>Contact StreamJust - The Best Video Streaming Services for 2024.</title>
                        <meta name="description" content="There are far more ways to stream video than Amazon Prime Video, Hulu, and Netflix. These are the top streaming services based on price, catalog, features, ..." key="desc" />
                        <meta name="keywords" content="audio, video, Movies, ek tha tiger, car, thrill movies" key="keywords" />
                        <meta property="og:title" content="StreamJust - The Best Video Streaming Services for 2024." key="ogtitle" />
                        <meta property="og:description" content="There are far more ways to stream video than Amazon Prime Video, Hulu, and Netflix. These are the top streaming services based on price, catalog, features, ..." key="ogdescription" />
                        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcTXrtJBfK1eObEYBnpVWe5hhRV4PL-U5TyBFw&usqp=CAU" key="ogimage" />
                    </Head>
                    <div className="p-5 bg-slate-400 sm:p-16">
                        <div className="w-full sm:w-6/12 border shadow-lg rounded-lg p-8 mx-auto">
                            <h1 className="font-bold text-2xl text-center mb-5">Contact Us</h1>
                            <ContactForm />
                        </div>
                    </div>
                </Template>
            </>
        </>
    );
    return design;
}

export default Page;