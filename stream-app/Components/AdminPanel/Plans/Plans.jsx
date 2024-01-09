'use client';
import CreatePlans from "./CreatePlans/CreatePlans";
import ShowPlans from "./ShowPlans/ShowPlans";

const Plans = () => {
    const design = (
        <>
            <>
                <div className="flex flex-col gap-4">
                    <CreatePlans />
                    <ShowPlans />
                </div>
            </>
        </>
    );
    return design;
}

export default Plans;