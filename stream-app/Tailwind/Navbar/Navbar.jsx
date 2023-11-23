import Link from "next/link";

const sample = {
    // position of navbar
    fixed: 'fixed top-0 left-0 w-full',
    // for navbar width control
    fixedWidth: 'sm:w-4/5 mx-auto',
    // colors for navbar
    primary: {
        nav: 'bg-indigo-600 px-4',
        link: 'hover:bg-indigo-500 px-10 py-6 hover:text-white'
    },
    secondary: {
        nav: 'bg-blue-600 px-4',
        link: 'hover:bg-blue-500 px-10 py-6 hover:text-white'
    },
    info: {
        nav: 'bg-cyan-600 px-4',
        link: 'hover:bg-cyan-500 px-10 py-6 hover:text-white'
    },
    error: {
        nav: 'bg-red-600 px-4',
        link: 'hover:bg-red-500 px-10 py-6 hover:text-white'
    },
    warning: {
        nav: 'bg-orange-600 px-4',
        link: 'hover:bg-orange-500 px-10 py-6 hover:text-white'
    },
    success: {
        nav: 'bg-green-600 px-4',
        link: 'hover:bg-green-500 px-10 py-6 hover:text-white'
    },
    // align controls varient
    variants: {
        one: 'flex items-center justify-start gap-12',
        two: 'flex items-center justify-end gap-12',
        three: 'flex items-center justify-between px-2',
        four: 'flex items-center justify-around',
        five: 'flex items-center justify-evenly'
    }
}

const Navbar = ({
    fullWidth = true,
    theme = 'primary',
    varient = 'one',
    fixed = false,
    menu
}) => {

    // MENUS COMPONENT
    const Menus = ({ item }) => {
        const m = (
            <Link
                href={item.href}
                className={sample[theme].link}
            >{item.label}</Link>
        );
        return m;
    }

    const design = (
        <>
            <nav
                className={`
                ${sample[theme].nav} 
                ${fixed ? sample.fixed : false}
                `}
            >
                <div
                    className={`
                    ${sample.variants[varient]} 
                    ${fullWidth ? fullWidth : sample.fixedWidth}
                    `}
                >
                    <Link
                        href={'/'}
                        className={sample[theme].link}
                    >{menu.brand}</Link>
                    <div className="flex">
                        {
                            menu.link.map((item, index) => {
                                return <Menus item={item} key={index} />
                            })
                        }
                    </div>
                </div>
            </nav>
        </>
    );
    return design;
}

export default Navbar;