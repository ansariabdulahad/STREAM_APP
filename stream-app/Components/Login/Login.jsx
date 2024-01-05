"use client";

import { redirect } from 'next/navigation';
import { Button, Card, FormDesign } from '../../Tailwind';
import Loader from '../Loader/Loader';
import Style from './Login.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';

const Login = () => {

    const [error, setError] = useState(false);

    const session = useSession();

    if (session === 'loading') {
        return <Loader />
    }

    if (session.status === 'authenticated') {
        return redirect('/');
    }

    const fields = [
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
        const { ok } = await signIn('credentials', { redirect: false });

        if (ok) {
            redirect('/');
        }
        else {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }

    const design = (
        <>
            <>
                <div className={`min-h-screen ${Style.main}`}>
                    <div className={`flex items-center justify-center min-h-screen ${Style.opacity}`}>
                        <div className='w-3/12'>
                            <Card>
                                <div className='flex flex-col gap-4'>
                                    {
                                        error
                                            ? <Card className={'bg-red-500 text-white font-bold'}>
                                                <h1>
                                                    Sign in failed. Check the details you provided are correct!
                                                </h1>
                                            </Card>
                                            : null
                                    }
                                    <FormDesign
                                        fields={fields}
                                        onSubmit={onSubmit}
                                    />
                                    <hr />
                                    <Button
                                        onClick={() => signIn('google')}
                                        className='flex items-center gap-3'
                                        theme='warning'>
                                        <i className='fa fa-google'
                                            style={{
                                                fontSize: "30px"
                                            }}
                                        ></i>
                                        Signin with google
                                    </Button>
                                    <Button
                                        onClick={() => signIn('facebook')}
                                        className='flex items-center gap-3'
                                        theme='secondary'>
                                        <i className='fa fa-facebook'
                                            style={{
                                                fontSize: "30px"
                                            }}
                                        ></i>
                                        Signin with facebook
                                    </Button>
                                    <Button
                                        onClick={() => signIn('github')}
                                        className='flex items-center gap-3'
                                        theme='primary'>
                                        <i className='fa fa-github'
                                            style={{
                                                fontSize: "30px"
                                            }}
                                        ></i>
                                        Signin with github
                                    </Button>
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

export default Login;