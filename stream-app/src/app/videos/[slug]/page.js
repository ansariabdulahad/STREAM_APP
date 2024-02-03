'use client';

import { redirect, useSearchParams } from "next/navigation";
import Template from "../../../../Components/Template/Template";
import VideoPlayer from "../../../../Components/VideoPlayer/VideoPlayer";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import { useEffect } from "react";

const getData = async (url) => {
    try {
        const response = await axios({
            method: 'GET',
            url
        });

        return response.data.data;
    } catch (error) {
        throw new Error('/plans');
    }
}

const Page = () => {
    const params = useSearchParams();
    const { data: session } = useSession();
    const { data: userPlan, error: userError } = useSWR(
        session ? `/api/purchase/${session.user.email}` : null,
        getData
    );

    useEffect(() => {
        // CHECK USER IS LOGGED IN OR NOT
        if (!session) {
            redirect('/login');
        }

        // CHECK USER PLAN DATA
        if (!userPlan && session.user.role !== 'ADMIN') {
            redirect('/plans');
        }

        // CHECK PLAN VALIDITY
        if (session.user.role !== 'ADMIN' && userPlan && userPlan.diff < 0) {
            redirect('/plans');
        }
    }, [session, userPlan]);

    const title = params.get('title');
    const desc = params.get('desc');
    const duration = params.get('duration');
    const thumbnail = params.get('thumbnail');
    const category = params.get('category');

    const customTitle = thumbnail.split('/')[1];

    const data = {
        title,
        desc,
        duration,
        thumbnail,
        category,
        customTitle
    }

    return (
        <Template>
            <div className="bg-black">
                <div className="w-full sm:w-9/12 mx-auto">
                    {data.title && <VideoPlayer params={data} />}
                    <div className="bg-white p-8">
                        <h2 className="text-2xl font-bold">
                            {data.customTitle && data.customTitle}
                        </h2>
                        <p className="font-bold">
                            Duration : {(data.duration && data.duration / 60).toFixed(2)} Min
                        </p>
                        <p className="text-gray-400">{data.desc && data.desc}</p>
                        <h2 className="text-2xl font-bold">
                            Category
                        </h2>
                        <p>{data.category && data.category}</p>
                    </div>
                </div>
            </div>
        </Template>
    );
}

export default Page;