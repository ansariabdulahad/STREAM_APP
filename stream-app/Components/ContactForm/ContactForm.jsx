import { FormDesign, Input } from "../../Tailwind";

const ContactForm = () => {
    const design = (
        <>
            <FormDesign>
                <div className="flex flex-col gap-3 mb-3">
                    <Input
                        name='name'
                        placeholder='Name'
                    />
                    <Input
                        name='email'
                        type="email"
                        placeholder='Email'
                    />
                    <Input
                        name='mobile'
                        type="tel"
                        placeholder='Mobile'
                    />
                    <Input
                        name='message'
                        placeholder='Message...'
                        textarea
                    />
                </div>
            </FormDesign>
        </>
    );
    return design;
}

export default ContactForm;