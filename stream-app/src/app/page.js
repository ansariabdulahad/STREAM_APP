'use client';

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "../../Tailwind";
import { useDrag } from "react-use-gesture";

const Page = () => {

  const [x, setX] = useState(false);
  const [i, setI] = useState(0);

  const handle = (index) => {
    return (
      setX(index === i ? !x : true),
      setI(index)
    )
  }

  const design = (
    <>
      <div className="flex gap-3">
        {
          Array(10).fill(0).map((item, index) => {
            return <Button
              onClick={() => handle(index)}
              className={x && index === i ? 'bg-red-500' : null}
            >Submit {i}</Button>
          })
        }
      </div>
    </>
  );
  return design;
}

export default Page;