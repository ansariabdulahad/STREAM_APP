import './Form.css';

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Button, Input, Select, UploadInput } from '..';

const FormDesign = ({
    fields,
    grid = 1,
    gap = 4,
    disabled = false,
    formData = null,
    btnType = 'create',
    ...rest
}) => {

    const schema = {
        fullname: yup.string().required('This field is required !'),
        name: yup.string().required('This field is required !'),
        email: yup.string().required('This field is required !').email('Enter a valid email address !'),
        password: yup.string().required('This field is required !'),
        mobile: yup.string().required('This field is required !'),
        message: yup.string().required('This field is required !'),
        title: yup.string().required('This field is required !'),
        desc: yup.string().required('This field is required !'),
        duration: yup.string().required('This field is required !'),
        staring: yup.string().required('This field is required !'),
        thumbnail: yup.string().required('This field is required !'),
        video: yup.string().required('This field is required !'),
        category: yup.string().required('This field is required !'),
        tags: yup.string().required('This field is required !'),
        amount: yup.string().required('This field is required !'),
        emi: yup.string().required('This field is required !')
    };

    const defaultValues = {};
    const validation = {};

    const Fields = ({ formik }) => {
        const allFields = fields.map((item, index) => {
            const { component, props } = item;

            switch (component) {
                case 'input': return <Input {...props} key={index} />
                case 'upload': return <UploadInput {...props} formik={formik} key={index} />
                case 'select': return <Select {...props} key={index} />
                default: return null;
            }
        });

        return allFields;
    }

    // MAP FUNCTION ON FILEDS TO GET NAME VALUES
    fields.map((item, index) => {
        const { props } = item;
        const { name } = props;

        defaultValues[name] = formData ? formData[name] : "";
        validation[name] = schema[name];
    })

    const design = (
        <>
            <Formik
                {...rest}
                initialValues={defaultValues}
                validationSchema={yup.object(validation)}
            >
                {
                    (formik) => {
                        return (
                            <>
                                <Form className={`grid gap-${gap}`}>
                                    <div className={`grid grid-cols-${grid} gap-${gap}`}>
                                        <Fields
                                            formik={formik}
                                        />
                                    </div>
                                    {
                                        btnType === 'create'
                                            ? <Button
                                                theme='error'
                                                type='submit'
                                                disabled={disabled}
                                            >Submit</Button>
                                            : <Button
                                                theme='info'
                                                type='submit'
                                                disabled={disabled}
                                            >Save Changes</Button>
                                    }
                                </Form >
                            </>
                        )
                    }
                }
            </Formik>
        </>
    );
    return design;
}

export default FormDesign;