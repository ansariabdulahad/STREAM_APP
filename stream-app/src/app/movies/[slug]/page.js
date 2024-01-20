'use client';

import { useSearchParams } from "next/navigation";
import Template from "../../../../Components/Template/Template";
import VideoPlayer from "../../../../Components/VideoPlayer/VideoPlayer";

const Page = () => {
    const params = useSearchParams();

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