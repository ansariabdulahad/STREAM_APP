'use client';

import { redirect, useSearchParams } from "next/navigation";
import Template from "../../../../Components/Template/Template";
import VideoPlayer from "../../../../Components/VideoPlayer/VideoPlayer";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";

const Page = () => {
    const params = useSearchParams();
    const { data: session } = useSession();

    // CHECK USER IS LOGGED IN OR NOT
    if (!session) {
        return redirect('/login');
    }

    const getData = async (url) => {
        try {
            const response = await axios({
                method: 'GET',
                url
            });

            return response.data.data;
        } catch (error) {
            return redirect('/plans');
        }
    }

    // CHECK USER AND FETCH USER PLAN DATA
    const { data: userPlan, error: userError } = useSWR(
        session ? `/api/purchase/${session.user.email}` : null,
        session ? getData : null
    );

    if (session.user.role !== 'ADMIN') {
        // CHECK USER PLAN IS PURCHASED OR NOT
        if (!userPlan) {
            return redirect('/plans');
        }

        // CHECK PLAN VALIDITY
        const { diff } = userPlan;
        if (diff < 0) {
            return redirect('/plans');
        }
    }

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

    const design = (
        <>
            <>
                <Template>
                    <div className="bg-black">
                        <div className="w-full sm:w-9/12 mx-auto">
                            {
                                data.title ? <VideoPlayer params={data} /> : null
                            }
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
            </>
        </>
    );
    return design;
}

export default Page;