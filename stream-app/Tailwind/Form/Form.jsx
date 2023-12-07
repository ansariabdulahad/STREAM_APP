import './Form.css';

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Button } from '..';

const FormDesign = ({
    children,
    ...rest
}) => {

    const schema = yup.object({
        fullname: yup.string().required('This field is required !'),
        name: yup.string().required('This field is required !'),
        email: yup.string().required('This field is required !').email('Enter a valid email address !'),
        password: yup.string().required('This field is required !'),
        mobile: yup.string().required('This field is required !'),
        message: yup.string().required('This field is required !')
    });

    const defaultValues = {
        fullname: '',
        email: '',
        password: ''
    }

    const design = (
        <>
            <Formik
                initialValues={defaultValues}
                validationSchema={schema}
                {...rest}
            >
                {
                    (formik) => {
                        return (
                            <>
                                <Form>
                                    {children}
                                    <Button
                                        theme='error'
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