import { Button } from "../../Tailwind";

const Loader = () => {
    const design = (
        <>
            <Button
                theme="error"
                className="m-4"
            >
                Loading...
            </Button>
        </>
    );
    return design;
}

export default Loader;