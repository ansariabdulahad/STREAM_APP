import Head from "next/head";
import AdminPanel from "../../../../Components/AdminPanel/AdminPanel";
import Movies from "../../../../Components/AdminPanel/Movies/Movies";

const Page = () => {
    const design = (
        <>
            <AdminPanel>
                <Head>
                    <title>Movies - AdminPanel - StreamJust - The Best Video Streaming Services for 2024.</title>
                    <meta property="robots" content="noindex,nofollow" key="robots" />
                </Head>
                <Movies />
            </AdminPanel>
        </>
    );
    return design;
}

export default Page;