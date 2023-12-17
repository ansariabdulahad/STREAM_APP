import { ErrorMessage, Field } from "formik";

export const UploadInput = ({ label = null, ...rest }) => {
    const design = (
        <div className="flex flex-col">
            {
                label ? <label className="text-left text-sm font-bold mb-2">{label}</label> : null
            }
            <Field type='file' {...rest} />
            <ErrorMessage name={rest.name} component={'p'} className="text-red-500 text-sm font-bold p-0 m-0" />
        </div>
    );
    return design;
}

export const Input = ({
    name,
    type = 'text',
    textarea = false,
    label = null,
    ...rest
}) => {
    const design = (
        <>
            <div className="flex flex-col">
                {
                    label ? <label className="text-left text-sm font-bold mb-2">{label}</label> : null
                }
                <Field
                    name={name}
                    type={type}
                    as={textarea ? 'textarea' : null}
                    {...rest}
                />
                <ErrorMessage name={name} component={'p'} className="text-red-500 text-sm font-bold p-0 m-0" />
            </div>
        </>
    );
    return design;
}

export const Select = ({ name, data, label, ...rest }) => {
    const design = (
        <>
            <div className="flex flex-col">
                {
                    label ? <label className="text-left text-sm font-bold mb-2">{label}</label> : null
                }
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
            </div>
        </>
    );
    return design;
}