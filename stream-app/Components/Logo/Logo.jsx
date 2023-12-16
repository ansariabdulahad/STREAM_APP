import { Icon } from "../../Tailwind";

const Logo = ({ ...rest }) => {
    const design = (
        <>
            <div className="flex gap-2 items-center">
                <Icon {...rest}>play_circle</Icon>
                <h1
                    className="text-2xl text-red-500"
                >Stream<strong>JUST</strong></h1>
            </div>
        </>
    );
    return design;
}

export default Logo;