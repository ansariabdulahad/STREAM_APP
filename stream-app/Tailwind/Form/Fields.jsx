import { ErrorMessage, Field } from "formik";

export const Input = ({
    name,
    type = 'text',
    textarea = false,
    ...rest
}) => {
    const design = (
        <>
            <Field
                {...rest}
                name={name}
                type={type}
                as={textarea ? 'textarea' : null}
            />
            <ErrorMessage name={name} component={'p'} className="text-red-500 text-sm font-bold p-0 m-0" />
        </>
    );
    return design;
}

export const Select = ({ name, data, ...rest }) => {
    const design = (
        <>
            <Field
                {...rest}
                name={name}
                as="select"
            >
                {
                    data.map((item, index) => {
                        return <option value={item.value} key={index}>{item.label}</option>
                    })
                }
            </Field>
            <ErrorMessage
                name={name}
                component="p"
                className="text-red-500 text-sm font-bold p-0 m-0"
            />
        </>
    );
    return design;
}