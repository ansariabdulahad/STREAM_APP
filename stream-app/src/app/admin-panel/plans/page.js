import Head from "next/head";
import AdminPanel from "../../../../Components/AdminPanel/AdminPanel";
import Plans from "../../../../Components/AdminPanel/Plans/Plans";

const page = async () => {
    
    const design = (
        <>
            <>
                <AdminPanel>
                    <Head>
                        <title>Plans - ADminPanel - StreamJust - The Best Video Streaming Services for 2024.</title>
                        <meta property="robots" content="noindex,nofollow" key="robots" />
                    </Head>
                    <Plans />
                </AdminPanel>
            </>
        </>
    );
    return design;
}

export default page;