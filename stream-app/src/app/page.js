'use client';

import { Button, Card, Navbar } from "../../Tailwind";

const Page = () => {

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
        theme="primary"
        varient="three"
        fixed={true}
        menu={menus}
      />
      <div style={{ width: '100%', height: '5000px' }}></div>
    </>
  );
  return design;
}

export default Page;