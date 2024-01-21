'use client';

import Template from "../../../Components/Template/Template";
import Videos from "../../../Components/Videos/Videos";

const getData = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/movies/active`);

            if (!response.ok) {
                return reject(new Error('Failed to retrieve movies from database !'));
            }
            return resolve(response.json());
        } catch (error) {
            return reject(error);
        }
    })
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