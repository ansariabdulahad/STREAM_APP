import { useSession } from "next-auth/react";
import Logo from "../Logo/Logo";

const { Navbar, IconButton, Footer } = require("../../Tailwind")

const Template = ({ children }) => {

    const { data, status } = useSession();

    // Constants
    const menus = {
        brand: <Logo />,
        link: [
            {
                label: 'HOME',
                href: '/'
            },
            {
                label: 'MOVIES',
                href: '/movies'
            },
            {
                label: 'BLOG',
                href: '/blog'
            },
            {
                label: 'CONTACT',
                href: '/contact'
            }
        ]
    }

    // DROP DOWN MENU
    const beforeLogin = [
        {
            label: 'Register',
            href: '/register',
            icon: 'person'
        },
        {
            label: 'Login',
            href: '/login',
            icon: 'login'
        }
    ]

    const afterLogin = [
        {
            label: data && data.user.name,
            href: '/register',
            icon: 'person'
        },
        {
            label: 'Logout',
            href: '/api/auth/signout',
            icon: 'logout',
            logout: true
        }
    ]

    const toolbars = [
        {
            label: <IconButton theme="primary" size="sm" className="bg-inherit">search</IconButton>
        },
        {
            label: <IconButton
                dropdown
                dropdownMenu={status && status === 'authenticated' ? afterLogin : beforeLogin}
                theme="error"
                size="sm"
            >
                {
                    status && status === 'authenticated'
                        ? <img src={data && data.user.image} alt="user_img" className="rounded-full" />
                        : "person"
                }
            </IconButton>
        }
    ]

    // Markup template

    const design = (
        <>
            <Navbar
                menu={menus}
                theme="dark"
                toolbar={toolbars}
                varient="three"
            />
            <div>
                {children}
            </div>
            <Footer />
        </>
    );
    return design;
}

export default Template;