import AdminPanel from "../../../../Components/AdminPanel/AdminPanel";
import Movies from "../../../../Components/AdminPanel/Movies/Movies";

const Page = () => {
    const design = (
        <>
            <AdminPanel>
                <Movies />
            </AdminPanel>
        </>
    );
    return design;
}

export default Page;