const Icon = ({
    children,
    outlined = false,
    className = ""
}) => {
    const design = (
        <>
            <span
                className={outlined ? `${className} material-icons-outlined` : `${className} material-icons`}
            >
                {children}
            </span>
        </>
    );
    return design;
}

export default Icon;