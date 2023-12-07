import Logo from "../Logo/Logo";

const { Navbar, IconButton, Footer } = require("../../Tailwind")

const Template = () => {
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

    const toolbars = [
        {
            label: <IconButton theme="error" size="sm" className="bg-inherit">search</IconButton>
        },
        {
            label: <IconButton theme="error" size="sm">person</IconButton>
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
            <Footer />
        </>
    );
    return design;
}

export default Template;