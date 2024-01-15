"use client";

import Link from 'next/link';
import { Card, FormDesign } from '../../Tailwind';
import Style from '../Login/Login.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import signup from './Register.action';
import { redirect } from 'next/navigation';

const Register = () => {

    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const RegisterReducer = useSelector(response => response.RegisterReducer);

    useEffect(() => {
        if (RegisterReducer.success) {
            RegisterReducer.success = false; // tell sir to do success value fail
            redirect('/plans');
        }
        if (RegisterReducer.error) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }, [RegisterReducer]);

    const fields = [
        {
            component: 'input',
            props: {
                name: 'name',
                type: 'text',
                placeholder: 'Fullname',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: "Fullname"
            }
        },
        {
            component: 'input',
            props: {
                name: 'email',
                type: 'email',
                placeholder: 'Email',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: "Email"
            }
        },
        {
            component: 'input',
            props: {
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: "Password"
            }
        }
    ]

    const onSubmit = async (values) => {
        dispatch(signup(values));
    }

    const design = (
        <>
            <>
                <div className={`min-h-screen ${Style.main}`}>
                    <div className={`flex items-center justify-center min-h-screen ${Style.opacity}`}>
                        <div className='w-full sm:w-3/12 md:w-4/12'>
                            <Card>
                                <div className='flex flex-col gap-4'>
                                    {
                                        error
                                            ? <Card
                                                style={{
                                                    backgroundColor: 'red'
                                                }}
                                                className={'text-white font-bold'}>
                                                <h1>
                                                    Registration failed. Please try again later!
                                                </h1>
                                            </Card>
                                            : null
                                    }
                                    <h1 className='text-2xl font-bold'>
                                        Register
                                    </h1>
                                    <FormDesign
                                        fields={fields}
                                        onSubmit={onSubmit}
                                        disabled={RegisterReducer.loading}
                                    />
                                    <Link href={'/login'} className='text-blue-500 text-end'>
                                        Visit Login Page !
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
    return design;
}

export default Register;