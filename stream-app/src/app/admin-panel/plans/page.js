import AdminPanel from "../../../../Components/AdminPanel/AdminPanel";
import Plans from "../../../../Components/AdminPanel/Plans/Plans";

const page = () => {
    const design = (
        <>
            <>
                <AdminPanel>
                    <Plans />
                </AdminPanel>
            </>
        </>
    );
    return design;
}

export default page;