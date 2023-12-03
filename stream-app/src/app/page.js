'use client';

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "../../Tailwind";

const Page = () => {

  const { scroll } = useSpring({
    loop: {
      reverse: true
    },
    delay: 2000,
    from: {
      scroll: 0
    },
    to: {
      scroll: 1000
    }
  })

  const design = (
    <>
      <animated.div
        scrollTop={scroll}
        className={'bg-cyan-500 h-96 overflow-auto'}
      >
        <img src="marvel.jpg" alt="marvel-pic" className="w-4/12" />
        <img src="marvel.jpg" alt="marvel-pic" className="w-4/12" />
        <img src="marvel.jpg" alt="marvel-pic" className="w-4/12" />
        <img src="marvel.jpg" alt="marvel-pic" className="w-4/12" />
        <img src="marvel.jpg" alt="marvel-pic" className="w-4/12" />
        <img src="marvel.jpg" alt="marvel-pic" className="w-4/12" />
        <img src="marvel.jpg" alt="marvel-pic" className="w-4/12" />
      </animated.div>
    </>
  );
  return design;
}

export default Page;