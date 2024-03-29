'use client';

import { useEffect, useState } from "react";
import { Button, IconButton } from "../../Tailwind";
import Logo from "../Logo/Logo";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminPanel = ({ children }) => {

    const [sidebar, setSidebar] = useState(null);
    const [section, setSection] = useState(null);
    const [open, setOpen] = useState(true);

    const pathname = usePathname();

    const menus = [
        {
            label: 'Movies',
            href: '/admin-panel/movies'
        },
        {
            label: 'Media Jobs',
            href: '/admin-panel/jobs'
        },
        {
            label: 'Plans',
            href: '/admin-panel/plans'
        }
    ]

    const dispatch = useDispatch();

    useEffect(() => {
        if (open) {
            return (
                setSidebar('w-0 sm:w-2/12'),
                setSection('w-full sm:w-10/12')
            );
        }
        else {
            return (
                setSidebar('absolute sm:static top-0 left-0 min-h-screen w-8/12 sm:w-0'),
                setSection('w-full')
            );
        }
    }, [open]);

    const Menu = ({ item }) => {
        const m = (
            <div className="hover:bg-red-300">
                <Button theme="t-primary">
                    <Link href={item.href} className="text-black">{item.label}</Link>
                </Button>
            </div>
        );
        return m;
    }

    const design = (
        <>
            <div className="min-h-screen flex">
                <div className={`bg-gray-100 shadow-2xl overflow-x-hidden ${sidebar}`}>
                    {
                        menus.map((item, index) => {
                            return <Menu key={index} item={item} />
                        })
                    }
                </div>
                <div className={`bg-slate-800 ${section}`}>
                    <nav className="px-5 py-3 bg-gray-100 flex justify-between items-center">
                        <Logo className="text-black" />
                        <div className="flex items-center gap-4">
                            <IconButton
                                onClick={() => setOpen(!open)}
                                size="sm"
                                theme="t-secondary"
                            >format_align_right</IconButton>
                            {
                                pathname === '/admin-panel/movies'
                                    ? <IconButton
                                        onClick={() => dispatch({
                                            type: 'OPEN_DIALOG'
                                        })}
                                        size="sm"
                                        theme="secondary"
                                    >add</IconButton>
                                    : null
                            }
                        </div>
                    </nav>
                    <div className="p-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
    return design;
}

export default AdminPanel;