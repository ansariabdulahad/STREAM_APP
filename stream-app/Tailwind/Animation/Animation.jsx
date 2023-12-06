import { useEffect, useState } from "react";
import { Icon } from "..";
import { useSprings, animated } from "@react-spring/web";
import { useGesture } from "react-use-gesture";

export const Carousel = ({
    data,
    height = 670,
    arrow = true,
    dots = true,
    counting = true
}) => {

    const [count, setCount] = useState(0);
    const [move, setMove] = useState(0);

    // this is used for smooth slide animations
    const [springs, api] = useSprings(data.length, () => ({
        x: '0'
    }));

    useEffect(() => {
        // this is for auto slied animations
        const timer = setTimeout(next, 5000);
        api.start({
            x: `-${move}%`
        });

        // cleanup function -- when useEffect is called multiple times then use this function
        return () => {
            clearTimeout(timer);
        }
    }, [move]);

    const onDragEnd = (e) => {
        let left = e.direction[0];

        if (left > 0) {
            prev();
        }
        else {
            next();
        }
    }

    const bind = useGesture({
        onDragEnd: onDragEnd // calling..
    });

    const prev = () => {
        if ((count + 1) > 1) {
            setCount(count - 1);
            setMove(move - 100);
        }
        else {
            setCount(data.length - 1);
            setMove(100 * (data.length - 1));
        }
    }

    const next = () => {
        if ((count + 1) < data.length) {
            setCount(count + 1);
            setMove(move + 100);
        }
        else {
            setCount(0);
            setMove(0);
        }
    }

    const dotsControl = (index) => {
        setCount(index);
        setMove(100 * index);
    }

    const Anim = ({ styles, index }) => {
        const a = (
            <animated.div
                {...bind()}
                style={{
                    width: '100%',
                    height: height,
                    background: `url(${data[index].image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    ...styles
                }}
            >

            </animated.div>
        );
        return a;
    }

    const design = (
        <>
            <div className="overflow-hidden relative">
                <div
                    className="flex"
                    style={{
                        width: `${100 * data.length}%`,
                    }}
                >
                    {
                        springs.map((styles, index) => {
                            return <Anim key={index} index={index} styles={styles} />
                        })
                    }
                </div>

                {/* left side control */}
                <div className="absolute left-0 top-0 p-5 
                h-full flex flex-col justify-between">
                    {
                        counting ?
                            <label className="bg-slate-900 bg-opacity-40 p-2 rounded-full text-white shadow-lg">
                                {count + 1}/{data.length}
                            </label> : <label></label>
                    }
                    {
                        arrow ?
                            <button onClick={prev}>
                                <Icon className="text-white shadow-2xl">arrow_back_ios</Icon>
                            </button> : null
                    }
                    <label></label>
                </div>

                {/*right side control*/}
                <div className="absolute right-0 top-0 p-5 
                h-full flex flex-col justify-between">
                    <label></label>
                    {
                        arrow ?
                            <button onClick={next}>
                                <Icon className="text-white shadow-2xl">arrow_forward_ios</Icon>
                            </button> : null
                    }
                    <label></label>
                </div>

                {/*botton side control*/}
                {
                    dots ?
                        <div className="absolute left-0 bottom-0 p-5 w-full flex justify-center">
                            <div className="flex gap-3">
                                {
                                    data.map((item, index) => {
                                        return (
                                            <>
                                                <button
                                                    onClick={() => dotsControl(index)}
                                                    className="rounded-lg shadow-sm"
                                                    style={{
                                                        width: '50px',
                                                        height: '5px',
                                                        background: count === index ? 'white' : 'rgba(255, 255, 255, 0.3)',
                                                        transitionDuration: '0.3s'
                                                    }}
                                                >
                                                </button >
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div> : null
                }
            </div>
        </>
    );
    return design;
}

export default Carousel;