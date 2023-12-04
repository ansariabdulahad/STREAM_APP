'use client';

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "../../Tailwind";
import { useDrag } from "react-use-gesture";

const Page = () => {

  const handleDrag = ({ offset }) => {
    const left = offset[0];
    const top = offset[1];
    api.start({
      x: left,
      y: top
    });
  }

  const gesture = useDrag(handleDrag);

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
        {...gesture()}
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
        {...gesture()}
        onClick={handleSpring}
        theme="secondary"
        className="mt-96">Move</Button>
    </>
  );
  return design;
}

export default Page;