import { FormDesign, Input } from "../../Tailwind";
import AWS from 'aws-sdk';

const ses = new AWS.SES({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});

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

    const onSubmit = async (values) => {
        try {
            const options = {
                Destination: {
                    ToAddresses: [
                        "ansariabdulahad3@gmail.com"
                    ]
                },
                Message: {
                    Body: {
                        Html: {
                            Charset: "UTF-8",
                            Data: `
                                <h1>${values.name}</h1>
                                <h1>${values.email}</h1>
                                <h1>${values.mobile}</h1>
                                <h1>${values.message}</h1>
                            `
                        },
                    },
                    Subject: {
                        Charset: "UTF-8",
                        Data: "Contact Form Query !"
                    }
                },
                Source: "abdulahadansari2001@gmail.com"
            }

            await ses.sendEmail(options).promise();
            alert("Email sent successfully, We will Contact you soon !");
        } catch (error) {
            alert(`Error sending email, please try again ! ${error.message}`);
        }
    }

    const design = (
        <>
            <>
                <FormDesign
                    fields={fields}
                    onSubmit={onSubmit}
                />
            </>
        </>
    );
    return design;
}

export default ContactForm;