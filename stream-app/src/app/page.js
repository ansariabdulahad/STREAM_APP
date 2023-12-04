'use client';

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "../../Tailwind";
import { useDrag } from "react-use-gesture";

const Page = () => {

  const [{ width }, api] = useSpring(() => ({
    width: 0
  }))

  const handleDrag = ({ direction }) => {
    const left = direction[0];
    let w = 0;

    if (left > 0) {
      // swipe left
      w = 250;
    }
    else {
      // swipe right
      w = 0;
    }

    api.start({
      width: w
    })
  }

  const drag = useDrag(handleDrag);

  const design = (
    <>
      <div
        {...drag()}
        className="flex items-start min-h-screen bg-gray-300"
      >
        <animated.div
          className="min-h-screen bg-white overflow-hidden"
          style={{
            width: width
          }}
        >
          <h1 className="text-5xl font-bold">JUST FOR CODE</h1>
        </animated.div>
        <div className="flex flex-col gap-5">
          <h1 className="bg-red-500">MAIN CONTENT</h1>
          <h1 className="bg-red-500">MAIN CONTENT</h1>
          <h1 className="bg-red-500">MAIN CONTENT</h1>
        </div>
      </div>
    </>
  );
  return design;
}

export default Page;