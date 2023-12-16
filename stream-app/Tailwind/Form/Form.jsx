import './Form.css';

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Button } from '..';

const FormDesign = ({
    children,
    className = "",
    fields,
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
        movie: yup.string().required('This field is required !'),
        category: yup.string().required('This field is required !'),
        tags: yup.string().required('This field is required !')
    };

    const defaultValues = {};
    const validation = {};

    fields.map((item, index) => {
        return (
            defaultValues[item] = "",
            validation[item] = schema[item]
        );
    });

    const design = (
        <>
            <Formik
                initialValues={defaultValues}
                validationSchema={yup.object(validation)}
                {...rest}
            >
                {
                    (formik) => {
                        return (
                            <>
                                <Form className={className}>
                                    {children}
                                    <Button
                                        theme='error'
                                        type='submit'
                                    >Submit</Button>
                                </Form>
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