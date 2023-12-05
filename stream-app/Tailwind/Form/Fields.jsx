import { ErrorMessage, Field } from "formik";

export const Input = ({ name, type = 'text', ...rest }) => {
    const design = (
        <>
            <Field
                {...rest}
                name={name}
                type={type}
                className="border p-3"
            />
            <ErrorMessage name={name} component={'p'} className="text-red-500" />
        </>
    );
    return design;
}