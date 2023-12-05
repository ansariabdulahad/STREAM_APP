import './Form.css';

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const FormDesign = ({
    children,
    ...rest
}) => {

    const schema = yup.object({
        fullname: yup.string().required('This field is required !'),
        email: yup.string().required('This field is required !').email('Enter a valid email address !'),
        password: yup.string().required('This field is required !')
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
                                    <button
                                        className='p-3 mt-4 bg-red-500 text-white'
                                    >Submit</button>
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