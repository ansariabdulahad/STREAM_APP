'use client';

import { Carousel } from "../../Tailwind";

const Page = () => {

  const data = [
    {
      image: 'a.jpg'
    },
    {
      image: 'b.jpg'
    },
    {
      image: 'c.jpg'
    }
  ]

  const design = (
    <>
      <Carousel data={data} />
    </>
  );
  return design;
}

export default Page;