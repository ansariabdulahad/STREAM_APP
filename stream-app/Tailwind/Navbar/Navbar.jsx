import Link from "next/link";
import { useEffect, useState } from "react";

const sample = {
    // position of navbar
    fixed: 'fixed top-0 left-0 w-full animate__animated animate__slideInDown',
    fixedUp: 'fixed top-0 left-0 w-full animate__animated animate__fadeInDown',
    // for navbar width control
    fixedWidth: 'sm:w-4/5 mx-auto',
    // colors for navbar
    primary: {
        nav: 'bg-indigo-600 sm:px-4',
        link: 'hover:bg-indigo-500 px-8 sm:px-10 py-4 sm:py-6 hover:text-white'
    },
    secondary: {
        nav: 'bg-blue-600 sm:px-4',
        link: 'hover:bg-blue-500 px-8 sm:px-10 py-4 sm:py-6 hover:text-white'
    },
    info: {
        nav: 'bg-cyan-600 sm:px-4',
        link: 'hover:bg-cyan-500 px-8 sm:px-10 py-4 sm:py-6 hover:text-white'
    },
    error: {
        nav: 'bg-red-600 sm:px-4',
        link: 'hover:bg-red-500 px-8 sm:px-10 py-4 sm:py-6 hover:text-white'
    },
    warning: {
        nav: 'bg-orange-600 sm:px-4',
        link: 'hover:bg-orange-500 px-8 sm:px-10 py-4 sm:py-6 hover:text-white'
    },
    success: {
        nav: 'bg-green-600 sm:px-4',
        link: 'hover:bg-green-500 px-8 sm:px-10 py-4 sm:py-6 hover:text-white'
    },
    // align controls varient
    variants: {
        one: 'flex flex-col sm:flex-row sm:items-center sm:justify-start gap-12',
        two: 'flex flex-col sm:flex-row sm:items-center sm:justify-end gap-12',
        three: 'flex flex-col sm:flex-row sm:items-center sm:justify-between px-2',
        four: 'flex flex-col sm:flex-row sm:items-center sm:justify-around',
        five: 'flex flex-col sm:flex-row sm:items-center sm:justify-evenly'
    }
}

const Navbar = ({
    fullWidth = true,
    theme = 'primary',
    varient = 'one',
    fixed = false,
    sticky = null,
    menu
}) => {

    const [stickyControl, setStickyControl] = useState(sticky);

    // USEEFFECT CODE ON SCROLLING
    useEffect(() => {
        if (sticky !== null) {
            window.onscroll = () => {
                if (window.scrollY > 300) {
                    return setStickyControl(true);
                }
                else if (window.screenY === 0) {
                    return setStickyControl(true);
                }
                else {
                    return setStickyControl(false);
                }
            }
        }
    }, [stickyControl]);

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
                ${fixed ? sample.fixed : null} 
                ${stickyControl ? sample.fixed : null}
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
                    <div className="flex flex-col sm:flex-row">
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