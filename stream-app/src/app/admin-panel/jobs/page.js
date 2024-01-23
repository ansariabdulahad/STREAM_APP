import Head from "next/head";
import AdminPanel from "../../../../Components/AdminPanel/AdminPanel";
import Jobs from "../../../../Components/AdminPanel/Jobs/Jobs";

const Page = () => {
    const design = (
        <>
            <AdminPanel>
                <Head>
                    <title>Jobs - AdminPanel StreamJust - The Best Video Streaming Services for 2024.</title>
                    <meta property="robots" content="noindex,nofollow" key="robots" />
                </Head>
                <Jobs />
            </AdminPanel>
        </>
    );
    return design;
}

export default Page;