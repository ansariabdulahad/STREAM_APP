'use client';

import { useEffect, useState } from "react";
import { IconButton } from "../../Tailwind";
import Logo from "../Logo/Logo";

const AdminPanel = () => {

    const [sidebar, setSidebar] = useState(null);
    const [section, setSection] = useState(null);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (open) {
            return (
                setSidebar('w-2/12'),
                setSection('w-10/12')
            );
        }
        else {
            return (
                setSidebar('w-0'),
                setSection('w-full')
            );
        }
    }, [open]);

    const design = (
        <>
            <div className="min-h-screen flex">
                <div className={`bg-white ${sidebar}`}></div>
                <div className={`bg-slate-800 ${section}`}>
                    <nav className="px-5 py-3 bg-gray-100 flex justify-between items-center">
                        <Logo className="text-black" />
                        <IconButton
                            onClick={() => setOpen(!open)}
                            size="sm"
                            theme="t-secondary"
                        >format_align_right</IconButton>
                    </nav>
                </div>
            </div>
        </>
    );
    return design;
}

export default AdminPanel;