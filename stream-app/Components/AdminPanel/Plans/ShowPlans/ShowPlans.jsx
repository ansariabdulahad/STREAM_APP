import useSWR from "swr";
import { Card, Button, IconButton, Dialog, FormDesign } from "../../../../Tailwind";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../Loader/Loader";
import { useDispatch } from "react-redux";

const ShowPlans = () => {

    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        desc: '',
        emi: '',
        amount: ''
    });

    const fields = [
        {
            component: 'input',
            props: {
                name: '_id',
                type: 'hidden',
                placeholder: 'ID',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3'
            }
        },
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

    const dispatch = useDispatch();

    const getData = async (url) => {
        try {
            const response = await axios({
                method: 'GET',
                url: url
            });

            return response.data.data;
        } catch (error) {
            return error.response.data;
        }
    }

    const { data, error } = useSWR('/api/plan', getData, { refreshInterval: 5000 });

    useEffect(() => {
        console.log(data, error);
    }, [data, error]);

    const trash = async (id) => {
        await axios({
            method: 'DELETE',
            url: `/api/plan/${id}`
        });
    }

    const edit = async (item) => {
        dispatch({
            type: 'OPEN_DIALOG'
        });
        setFormData(item);
    }

    const update = async (values, { resetForm }) => {
        const { _id } = values;

        await axios({
            method: 'PUT',
            url: `/api/plan/${_id}`,
            data: values
        });

        resetForm();

        dispatch({
            type: 'CLOSE_DIALOG'
        });
    }

    const AllPlans = ({ item }) => {
        const plan = (
            <>
                <>
                    <Card>
                        <h1 className="text-2xl font-bold">
                            {item.title}
                        </h1>
                        <p className="text-gray-400">
                            {item.desc}
                        </p>
                        <div className="flex my-2 items-center gap-1">
                            <h1 className="text-6xl font-bold">
                                {item.amount}
                            </h1>
                            <p className="text-gray-400">
                                {item.emi} / EMI
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <IconButton
                                onClick={() => edit(item)}
                                theme="secondary">
                                edit
                            </IconButton>
                            <IconButton
                                onClick={() => trash(item._id)}
                                theme="error">
                                delete
                            </IconButton>
                        </div>
                    </Card>
                </>
            </>
        );
        return plan;
    }

    const design = (
        <>
            <>
                <div className="grid sm:grid-cols-3 gap-4">
                    {
                        data === undefined ? <Loader /> : null
                    }
                    {
                        data && data.map((item, index) => {
                            return <AllPlans key={index} item={item} />
                        })
                    }
                    <Dialog title="Edit & Save">
                        <FormDesign
                            fields={fields}
                            formData={formData}
                            btnType={'edit'}
                            onSubmit={update}
                        />
                    </Dialog>
                </div>
            </>
        </>
    );
    return design;
}

export default ShowPlans;