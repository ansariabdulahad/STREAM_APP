import './Form.css';

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Button, Input, Select, UploadInput } from '..';

const FormDesign = ({ fields, grid = 1, gap = 4 }) => {

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

    const Fields = () => {
        const allFields = fields.map((item, index) => {
            const { component, props } = item;

            switch (component) {
                case 'input': return <Input {...props} key={index} />
                case 'upload': return <UploadInput {...props} key={index} />
                case 'select': return <Select {...props} key={index} />
                default: return null;
            }
        });

        return allFields;
    }

    const design = (
        <>
            <Formik>
                {
                    (formik) => {
                        return (
                            <>
                                <Form className={`grid gap-${gap}`}>
                                    <div className={`grid grid-cols-${grid} gap-${gap}`}>
                                        <Fields />
                                    </div>
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