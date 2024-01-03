import Logo from "../Logo/Logo";

const { Navbar, IconButton, Footer } = require("../../Tailwind")

const Template = ({ children }) => {
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
    const dMenu = [
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

    const toolbars = [
        {
            label: <IconButton theme="primary" size="sm" className="bg-inherit">search</IconButton>
        },
        {
            label: <IconButton
                dropdown
                dropdownMenu={dMenu}
                theme="error"
                size="sm"
            >person</IconButton>
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