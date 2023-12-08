import Image from "next/image";
import Logo from "../../Components/Logo/Logo";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { IconButton } from "..";

const Footer = () => {
    const design = (
        <>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between bg-slate-900 p-16">
                <div className="mx-auto">
                    <Logo />
                    <p className="text-gray-300 my-5">
                        Lorem Ipsum is simply dummy text of the printing and <br /> typesetting
                        industry. Lorem Ipsum has been the industry's <br /> standard dummy text
                        ever since the 1500s.
                    </p>
                    <div className="flex items-center gap-3">
                        <button className="bg-slate-800 py-2 rounded-md px-5">
                            <Image src={'/google-play.png'} width={150} height={48} />
                        </button>
                        <button className="py-2 rounded-md px-5">
                            <Image src={'/app-store.png'} width={190} height={60} />
                        </button>
                    </div>
                </div>

                <div className="mx-auto">
                    <h1 className="text-gray-300 text-xl">
                        Follow Us
                    </h1>
                    <div className="flex gap-3 my-4">
                        <IconButton theme="primary">home</IconButton>
                        <IconButton theme="warning">home</IconButton>
                        <IconButton theme="success">home</IconButton>
                        <IconButton theme="error">home</IconButton>
                        <IconButton theme="info">home</IconButton>
                    </div>
                </div>

                <div className="mx-auto w-full sm:w-3/12">
                    <h1 className="text-xl text-gray-300">CONTACT</h1>
                    <div className="my-5">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
    return design;
};

export default Footer;
