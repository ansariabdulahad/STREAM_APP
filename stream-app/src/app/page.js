'use client';

import { useState } from "react";
import { Button, Card, Expand, Fade, Flip, Navbar, Zoom } from "../../Tailwind";

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
          marginTop: '20px',
          marginBottom: '10px'
        }}
        onClick={() => setShow(!show)}
      >TOGGLE</Button>
      <div className="w-5/12">
        <Flip
          state={show}
          className="w-full"
        >
          <img
            src="./marvel.jpg"
            alt="marvel-img"
            className="w-full"
          />
        </Flip>
      </div>
    </>
  );
  return design;
}

export default Page;