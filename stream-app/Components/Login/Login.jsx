"use client";

import { Button } from '../../Tailwind';
import Style from './Login.module.css';

const Login = () => {
    const design = (
        <>
            <>
                <div className={`min-h-screen ${Style.main}`}>
                    <div className={`flex items-center justify-center min-h-screen ${Style.opacity}`}>
                        <div className='flex flex-col gap-4'>
                            <Button theme='warning'>
                                <i className='fa fa-google'
                                    style={{
                                        fontSize: "30px"
                                    }}
                                ></i>
                                Signin with google
                            </Button>
                            <Button theme='secondary'>
                                <i className='fa fa-facebook'
                                    style={{
                                        fontSize: "30px"
                                    }}
                                ></i>
                                Signin with facebook
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