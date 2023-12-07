import Link from "next/link";
import { useEffect, useState } from "react";
import { Expand, IconButton } from "..";

const sample = {
    // position of navbar
    fixed: 'fixed top-0 left-0 w-full animate__animated animate__slideInDown',
    fixedUp: 'fixed top-0 left-0 w-full animate__animated animate__fadeInDown',
    // for navbar width control
    fixedWidth: 'sm:w-4/5 mx-auto',
    // dark and light mode for navbar
    dark: {
        nav: "bg-slate-900 sm:px-4",
        link: "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-slate-800 hover:text-white"
    },
    light: {
        nav: "bg-gray-100 sm:px-4",
        link: "text-black py-4 sm:py-6 px-8 sm:px-10 hover:bg-gray-50"
    },
    // colors for navbar
    primary: {
        nav: 'bg-indigo-600 sm:px-4 text-white',
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
    toolbar = null,
    menu
}) => {

    const [show, setShow] = useState(false);
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
                    <div className="flex justify-between items-center">
                        <Link
                            href={'/'}
                            className={sample[theme].link}
                        >{menu.brand}
                        </Link>
                        <IconButton
                            className="sm:hidden mx-2"
                            onClick={() => setShow(!show)}
                        >menu</IconButton>
                    </div>

                    <div className="hidden sm:flex flex-col sm:flex-row">
                        {
                            menu.link.map((item, index) => {
                                return <Menus item={item} key={index} />
                            })
                        }
                    </div>
                    {
                        toolbar
                            ?
                            <div className="hidden sm:flex gap-3 p-3">
                                {
                                    toolbar.map((item, index) => {
                                        return <div key={index}>{item.label}</div>
                                    })
                                }
                            </div>
                            : null
                    }
                </div>
            </nav>

            <Expand
                state={show}
                className="fixed bottom-0 left-0 w-full bg-slate-900 text-white z-50"
            >
                <div className="sm:hidden flex flex-col sm:flex-row">
                    {
                        menu.link.map((item, index) => {
                            return <Menus item={item} key={index} />
                        })
                    }
                </div>
                {
                    toolbar
                        ?
                        <div className="sm:hidden flex gap-3 p-3">
                            {
                                toolbar.map((item, index) => {
                                    return <div key={index}>{item.label}</div>
                                })
                            }
                        </div>
                        : null
                }
            </Expand>
        </>
    );
    return design;
}

export default Navbar;