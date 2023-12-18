import { FormDesign, Input } from "../../Tailwind";

const ContactForm = () => {

    const fields = [
        {
            component: 'input',
            props: {
                name: 'name',
                placeholder: 'Name',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                width: "full"
            }
        },
        {
            component: 'input',
            props: {
                name: 'email',
                placeholder: 'Email',
                type: 'email',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                width: "full"
            }
        },
        {
            component: 'input',
            props: {
                name: 'mobile',
                placeholder: 'Mobile',
                type: 'tel',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                width: "full"
            }
        },
        {
            component: 'input',
            props: {
                name: 'message',
                placeholder: 'Message',
                textarea: true,
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                width: "full"
            }
        }
    ];

    const design = (
        <>
            <FormDesign fields={fields} />
        </>
    );
    return design;
}

export default ContactForm;