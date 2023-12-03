'use client';

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "../../Tailwind";

const Page = () => {

  const [pause, setPause] = useState(false);

  const move = useSpring({
    pause: pause,
    loop: {
      reverse: true
    },
    // delay: 2000,
    from: {
      color: 'red',
      top: 0,
      left: 0
    },
    to: {
      color: 'green',
      top: 0,
      left: 200
    },
    config: {
      duration: 3000
    }
  });

  const { number } = useSpring({
    pause: pause,
    loop: {
      reverse: true,
    },
    delay: 2000,
    from: {
      number: 0
    },
    to: {
      number: 1000
    },
    config: {
      duration: 3000
    }
  })

  const design = (
    <>
      <animated.h1
        style={move}
        className={'text-9xl txt-red-500'}
      >
        {number.to((counter) => Math.floor(counter))}
      </animated.h1>
      <Button
        className="mt-96"
        onClick={() => setPause(!pause)}
      >Control</Button>
    </>
  );
  return design;
}

export default Page;