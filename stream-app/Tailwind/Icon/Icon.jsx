const Icon = ({
    children,
    outlined = false,
    className = "",
    ...rest
}) => {
    const design = (
        <>
            <span
                {...rest}
                className={
                    outlined
                        ? `${className} material-icons-outlined`
                        : `${className} material-icons`
                }
            >
                {children}
            </span>
        </>
    );
    return design;
}

export default Icon;