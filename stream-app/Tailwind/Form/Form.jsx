import './Form.css';

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const FormDesign = () => {

    const schema = yup.object({
        username: yup.string().required('Username is required !').email('Enter a valid email !'),
        password: yup.string().required('Password is required !')
    })

    const defaultValues = {
        username: '',
        password: ''
    };

    const onSubmit = (values) => {
        console.log(values);
    }

    const design = (
        <>
            <Formik
                initialValues={defaultValues}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                {
                    (formik) => {
                        return (
                            <>
                                <Form className="flex flex-col gap-3 w-4/12 mt-3">
                                    <Field
                                        className='border p-3'
                                        name='username'
                                        type='email'
                                        placeholder='Username'
                                    />
                                    <ErrorMessage name="username" component={'p'} className="text-red-500" />
                                    <Field
                                        className='border p-3'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                    />
                                    <ErrorMessage name="password" component={'p'} className="text-red-500" />
                                    <button
                                        className="p-3 bg-red-500 text-white"
                                        disabled={!(formik.dirty && formik.isValid)}
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