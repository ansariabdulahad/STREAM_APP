import Head from "next/head";
import Register from "../../../Components/Register/Register";

const Page = () => {
    const design = (
        <>
            <>
                <Head>
                    <title>Register - StreamJust - The Best Video Streaming Services for 2024.</title>
                    <meta name="description" content="There are far more ways to stream video than Amazon Prime Video, Hulu, and Netflix. These are the top streaming services based on price, catalog, features, ..." key="desc" />
                    <meta name="keywords" content="audio, video, Movies, ek tha tiger, car, thrill movies" key="keywords" />
                    <meta property="og:title" content="StreamJust - The Best Video Streaming Services for 2024." key="ogtitle" />
                    <meta property="og:description" content="There are far more ways to stream video than Amazon Prime Video, Hulu, and Netflix. These are the top streaming services based on price, catalog, features, ..." key="ogdescription" />
                    <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcTXrtJBfK1eObEYBnpVWe5hhRV4PL-U5TyBFw&usqp=CAU" key="ogimage" />
                </Head>
                <Register />
            </>
        </>
    );
    return design;
}

export default Page;