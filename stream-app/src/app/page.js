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
      {/*for large device*/}
      <div className="hidden sm:block">
        <Carousel data={data} />
      </div>
      {/*for small device*/}
      <div className="sm:hidden block">
        <Carousel counting={false} data={data} height={320} />
      </div>
    </>
  );
  return design;
}

export default Page;