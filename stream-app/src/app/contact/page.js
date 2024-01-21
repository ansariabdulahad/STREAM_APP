'use client';

import Template from "../../../Components/Template/Template";
import ContactForm from "../../../Components/ContactForm/ContactForm";

const Page = () => {
    const design = (
        <>
            <>
                <Template>
                    <div className="p-5 bg-slate-400 sm:p-16">
                        <div className="w-full sm:w-6/12 border shadow-lg rounded-lg p-8 mx-auto">
                            <h1 className="font-bold text-2xl text-center mb-5">Contact Us</h1>
                            <ContactForm />
                        </div>
                    </div>
                </Template>
            </>
        </>
    );
    return design;
}

export default Page;