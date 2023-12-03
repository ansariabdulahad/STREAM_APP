'use client';

import { useState } from "react";
import { Button, Card, Expand, Fade, Flip, Icon, IconButton, Navbar, PatternOne, PatternTwo, Zoom } from "../../Tailwind";

const Page = () => {

  const menus = {
    brand: 'Just For Code',
    link: [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'About',
        href: '/about'
      },
      {
        label: 'Images',
        href: '/images'
      },
      {
        label: 'Blog',
        href: '/blog'
      }
    ]
  }

  const toolbars = [
    {
      label: <IconButton className="bg-indigo-100 text-indigo-600">home</IconButton>,
      href: '/'
    },
    {
      label: <IconButton className="bg-indigo-100 text-indigo-600">edit</IconButton>,
      href: '/'
    }
  ]

  const design = (
    <>
      <Navbar
        menu={menus}
        varient="three"
        toolbar={toolbars}
        theme="dark"
      />
    </>
  );
  return design;
}

export default Page;