"use client";

import { redirect } from 'next/navigation';
import { Button } from '../../Tailwind';
import Loader from '../Loader/Loader';
import Style from './Login.module.css';
import { signIn, useSession } from 'next-auth/react';

const Login = () => {

    const session = useSession();

    if (session === 'loading') {
        return <Loader />
    }

    if (session.status === 'authenticated') {
        return redirect('/');
    }

    const design = (
        <>
            <>
                <div className={`min-h-screen ${Style.main}`}>
                    <div className={`flex items-center justify-center min-h-screen ${Style.opacity}`}>
                        <div className='flex flex-col gap-4'>
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
                    </div>
                </div>
            </>
        </>
    );
    return design;
}

export default Login;