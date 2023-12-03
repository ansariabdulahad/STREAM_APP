import { Icon } from "..";

const btnSize = {
    sm: "w-10 h-10 rounded-full",
    md: "w-12 h-12 rounded-full",
    lg: "w-14 h-14 rounded-full",
    xl: "w-16 h-16 rounded-full"
}

// Button disgn json structure.
const sample = {
    // FOR OUTLINED BUTTON DESIGN
    'o-primary': 'border border-teal-600 text-teal-600 shadow-lg',
    'o-secondary': 'border border-blue-600 text-blue-600 shadow-lg',
    'o-info': 'border border-cyan-600 text-cyan-600 shadow-lg',
    'o-error': 'border border-red-600 text-red-600 shadow-lg',
    'o-warning': 'border border-orange-600 text-orange-600 shadow-lg',
    'o-success': 'border border-green-600 text-green-600 shadow-lg',
    // FOR CONTAINED BUTTON DESIGN
    'primary': 'bg-teal-600 text-white shadow-lg',
    'secondary': 'bg-blue-600 text-white shadow-lg',
    'info': 'bg-cyan-600 text-white shadow-lg',
    'error': 'bg-red-600 text-white shadow-lg',
    'warning': 'bg-orange-600 text-white shadow-lg',
    'success': 'bg-green-600 text-white shadow-lg',
    // FOR TEXT BUTTON DESIGN
    't-primary': 'text-teal-600',
    't-secondary': 'text-blue-600',
    't-info': 'text-cyan-600',
    't-error': 'text-red-600',
    't-warning': 'text-orange-600',
    't-success': 'text-green-600'
}

const IconButton = ({
    children,
    theme = 'primary',
    className = "",
    size = 'md',
    ...rest
}) => {
    const design = (
        <>
            <button
                className={`flex justify-center items-center ${sample[theme]} ${className} ${btnSize[size]}`}
                {...rest}
            >
                <Icon>{children}</Icon>
            </button>
        </>
    );
    return design;
}

export default IconButton;