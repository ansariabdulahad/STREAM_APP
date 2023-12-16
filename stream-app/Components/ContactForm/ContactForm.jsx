import { FormDesign, Input } from "../../Tailwind";

const ContactForm = () => {

    const fields = ['name', 'email', 'mobile', 'message'];

    const design = (
        <>
            <FormDesign fields={fields}>
                <div className="flex flex-col gap-3 mb-3">
                    <Input
                        name='name'
                        placeholder='Name'
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <Input
                        name='email'
                        type="email"
                        placeholder='Email'
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <Input
                        name='mobile'
                        type="tel"
                        placeholder='Mobile'
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <Input
                        name='message'
                        placeholder='Message...'
                        textarea
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                </div>
            </FormDesign>
        </>
    );
    return design;
}

export default ContactForm;