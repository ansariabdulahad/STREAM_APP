import Style from './Animation.module.css';

import { useEffect, useState } from "react";
import { Button, Icon } from "..";
import { useSprings, animated } from "@react-spring/web";
import { useDrag, useGesture } from "react-use-gesture";
import useMeasure from 'react-use-measure';
import { useDispatch } from 'react-redux';

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
                    ...styles
                }}
            >
                <div className={`flex items-center h-full ${Style['caption-bg']}`}>
                    <div className="w-full p-8 sm:p-16">
                        {data[index].caption}
                    </div>
                </div>
            </animated.div>
        );
        return a;
    }

    const design = (
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
                                                key={index}
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
    );
    return design;
}

export const Slider = ({ data, verticle = false }) => {

    const dispatch = useDispatch();

    const [springs, api] = useSprings(data.length, () => ({
        x: 0,
        y: 0
    }));

    const [move, setMove] = useState(0);
    const [count, setCount] = useState(0);

    const [image, imageBound] = useMeasure();
    const [main, mainBound] = useMeasure();

    const handleDrag = ({ offset }) => {
        api.start({
            x: verticle ? null : offset[0],
            y: verticle ? offset[1] : null
        })
    }

    const bind = useDrag(handleDrag, {
        bounds: {
            left: -((imageBound.width * data.length) - (mainBound.width - (imageBound.width / 2))),
            right: 0,
            top: -((imageBound.height * data.length) - (516 - (imageBound.height * 2))),
            bottom: 0
        }
    });

    const next = () => {
        if (count < data.length - 4) {
            setCount(count + 1);
            verticle ?
                setMove(move + imageBound.height)
                :
                setMove(move + mainBound.width);
        }
        else {
            return null;
        }
    }

    const prev = () => {
        if (count > 0) {
            setCount(count - 1);
            verticle ?
                setMove(move - imageBound.height)
                :
                setMove(move - mainBound.width);
        }
        else {
            return null;
        }
    }

    const view = (index) => {
        let payload = data[index];
        dispatch({
            type: 'PREVIEW_IMAGE',
            payload: payload
        })
    }

    useEffect(() => {
        api.start({
            x: verticle ? null : -move,
            y: verticle ? -move : null
        })
    }, [move]);

    const Anim = ({ styles, index }) => {
        const anim = (
            <animated.div
                onClick={verticle ? () => view(index) : null}
                {...bind()}
                ref={image}
                className={`shadow-md shadow-slate-900 rounded-lg ${Style['no-select']}`}
                style={{
                    ...styles,
                    width: verticle ? '100%' : '25%',
                    height: '181px',
                    background: `url(${data[index].thumbnail})`,
                    backgroundSize: 'cover'
                }}
            >
                <div className={`rounded-md h-full 
                ${Style['caption-bg']} flex items-center`}>
                    <div className='px-2 sm:px-4 text-white text-ellipsis'>
                        <h1 className='sm:text-xl'>
                            {data[index].title}
                        </h1>
                        <p>
                            {data[index].duration}
                        </p>
                        <Button theme='error' className='flex items-center gap-2 text-xs px-3 mt-3'>
                            <Icon>play_circle</Icon> Play Now
                        </Button>
                    </div>
                </div>
            </animated.div>
        );
        return anim;
    }

    const design = (
        <>
            <p className='text-white'>
                {move} / {count}
            </p>
            <div
                ref={main}
                className={`overflow-hidden 
                ${verticle ? null : 'relative'}`}>
                <div className={`flex gap-4 
                ${verticle ? 'flex-col' : 'flex-row'}
                        `}
                    style={{
                        width: verticle ? ('100%') : (25 * data.length) + '%'
                    }}
                >
                    {
                        springs.map((styles, index) => {
                            return <Anim styles={styles} index={index} key={index} />
                        })
                    }
                </div>

                <div
                    className={`flex absolute 
                    ${verticle ? "w-full justify-center top-0 left-0" : "h-full items-center top-0 left-0"}`}>
                    <button
                        onClick={prev}
                        style={{
                            background: 'rgba(0,0,0,0.8)'
                        }}
                        className={`text-white rounded-md 
                        ${verticle ? "px-4 pt-2 mt-5" : "py-3 px-2"}`}>
                        <Icon>
                            {verticle ? "arrow_upward" : "arrow_back_ios"}
                        </Icon>
                    </button>
                </div>

                <div
                    className={`flex absolute 
                    ${verticle ? "w-full justify-center bottom-0 left-0" : "h-full items-center top-0 right-0"}`}>
                    <button
                        onClick={next}
                        style={{
                            background: 'rgba(0,0,0,0.8)'
                        }}
                        className={`text-white rounded-md 
                        ${verticle ? "px-4 pt-2" : "py-3 px-2"}`}>
                        <Icon>
                            {verticle ? "arrow_downward" : "arrow_forward_ios"}
                        </Icon>
                    </button>
                </div>
            </div>
        </>
    );
    return design;
}