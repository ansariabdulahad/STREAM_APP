// Button disgn json structure.
const sample = {
    // FOR OUTLINED BUTTON DESIGN
    'o-primary': 'border border-teal-600 text-teal-600 shadow-lg rounded-sm px-4 py-2',
    'o-secondary': 'border border-blue-600 text-blue-600 shadow-lg rounded-sm px-4 py-2',
    'o-info': 'border border-cyan-600 text-cyan-600 shadow-lg rounded-sm px-4 py-2',
    'o-error': 'border border-red-600 text-red-600 shadow-lg rounded-sm px-4 py-2',
    'o-warning': 'border border-orange-600 text-orange-600 shadow-lg rounded-sm px-4 py-2',
    'o-success': 'border border-green-600 text-green-600 shadow-lg rounded-sm px-4 py-2',
    // FOR CONTAINED BUTTON DESIGN
    'disabled': 'bg-gray-200 text-white shadow-lg rounded-sm px-4 py-2',
    'primary': 'bg-teal-600 text-white shadow-lg rounded-sm px-4 py-2',
    'secondary': 'bg-blue-600 text-white shadow-lg rounded-sm px-4 py-2',
    'info': 'bg-cyan-600 text-white shadow-lg rounded-sm px-4 py-2',
    'error': 'bg-red-600 text-white shadow-lg rounded-sm px-4 py-2',
    'warning': 'bg-orange-600 text-white shadow-lg rounded-sm px-4 py-2',
    'success': 'bg-green-600 text-white shadow-lg rounded-sm px-4 py-2',
    // FOR TEXT BUTTON DESIGN
    't-primary': 'text-teal-600 px-4 py-2',
    't-secondary': 'text-blue-600 px-4 py-2',
    't-info': 'text-cyan-600 px-4 py-2',
    't-error': 'text-red-600 px-4 py-2',
    't-warning': 'text-orange-600 px-4 py-2',
    't-success': 'text-green-600 px-4 py-2'
}


const Button = ({
    children,
    theme = 'primary',
    className = "",
    ...rest
}) => {
    const design = (
        <>
            <button
                className={`${sample[theme]} ${className}`}
                {...rest}
            >{children}</button>
        </>
    );
    return design;
}

export default Button;