import { useDispatch, useSelector } from "react-redux";
import { Card, FormDesign } from "../../../../Tailwind";
import { create } from "../Plans.action";
import { useEffect, useState } from "react";

const CreatePlans = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const dispatch = useDispatch();
    const PlansReducer = useSelector(response => response.PlansReducer);

    useEffect(() => {
        // if (PlansReducer.createLoading) {
        //     setDisabled(true);
        // }
        if (PlansReducer.createSuccess) {
            // setDisabled(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }
        if (PlansReducer.createError) {
            // setDisabled(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }, [PlansReducer]);

    const fields = [
        {
            component: 'input',
            props: {
                name: 'title',
                placeholder: 'Starter',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: 'Plan Name'
            }
        },
        {
            component: 'input',
            props: {
                name: 'emi',
                placeholder: 'Monthly',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: 'EMI Name'
            }
        },
        {
            component: 'input',
            props: {
                name: 'amount',
                placeholder: '2000',
                type: 'number',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: 'Amount'
            }
        },
        {
            component: 'input',
            props: {
                name: 'desc',
                placeholder: 'Description',
                textarea: true,
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: 'Description'
            }
        }
    ]

    const onSubmit = (values, { resetForm }) => {
        dispatch(create(values, resetForm));
    }

    const design = (
        <>
            <>
                <Card>
                    {
                        success
                            ? <Card
                                style={{
                                    backgroundColor: 'green'
                                }}
                                className={'text-white font-bold'}>
                                <h1>
                                    Plan Created Successfully, You can create another plan !
                                </h1>
                            </Card>
                            : null
                    }
                    {
                        error
                            ? <Card
                                style={{
                                    backgroundColor: 'red'
                                }}
                                className={'text-white font-bold'}>
                                <h1>
                                    Create plan failed. Please try again later!
                                </h1>
                            </Card>
                            : null
                    }
                    <FormDesign
                        fields={fields}
                        onSubmit={onSubmit}
                        disabled={PlansReducer.createLoading}
                    />
                </Card>
            </>
        </>
    );
    return design;
}

export default CreatePlans;