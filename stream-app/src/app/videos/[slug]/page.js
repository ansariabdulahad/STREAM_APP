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

    const customTitle = thumbnail.split('/')[1];

    const data = {
        title,
        desc,
        duration,
        thumbnail,
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
                        </div>
                    </div>
                </Template>
            </>
        </>
    );
    return design;
}

export default Page;