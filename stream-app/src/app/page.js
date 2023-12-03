'use client';

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "../../Tailwind";

const Page = () => {

  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0
  }));

  const handleSpring = () => {
    api.start({
      x: 500,
      y: 200
    })

  }

  const design = (
    <>
      <animated.div
        style={{
          width: '200px',
          height: '200px',
          background: 'red',
          x: x,
          y: y
        }}
      >
      </animated.div>
      <Button
        onClick={handleSpring}
        theme="secondary"
        className="mt-96">Move</Button>
    </>
  );
  return design;
}

export default Page;