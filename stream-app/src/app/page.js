'use client';

import { useState } from "react";
import { Button, Card, Navbar } from "../../Tailwind";

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
      <Navbar
        fullWidth={true}
        theme="warning"
        varient="three"
        menu={menus}
      />
      <Button
        theme="error"
        style={{
          marginTop: '20px'
        }}
        onClick={() => setShow(!show)}
      >TOGGLE</Button>
      <img src="./marvel.jpg" alt="marvel-img" />
    </>
  );
  return design;
}

export default Page;