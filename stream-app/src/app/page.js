'use client';

import { useState } from "react";
import { Button, Card, Expand, Fade, Flip, Icon, IconButton, Navbar, PatternOne, PatternTwo, Zoom } from "../../Tailwind";

const Page = () => {

  const [show, setShow] = useState(true)

  const menus = {
    brand: 'Just For Code',
    link: [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Home',
        href: '/'
      }
    ]
  }

  const design = (
    <>
      <IconButton size="sm">home</IconButton>
      <IconButton size="md">delete</IconButton>
      <IconButton size="lg">login</IconButton>
      <IconButton size="xl">edit</IconButton>
    </>
  );
  return design;
}

export default Page;