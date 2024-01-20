'use client';

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
                    <Videos videos={data && data.data} />
                </Template>
            </>
        </>
    );
    return design;
}

export default Page;