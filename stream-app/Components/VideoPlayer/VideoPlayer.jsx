'use client'

import 'video.js/dist/video-js.css';

import videojs from "video.js";
import { useEffect, useRef } from 'react';
import { Button } from '../../Tailwind';

const VideoPlayer = () => {

    const video = useRef();
    const player = useRef(null);

    const options = {
        controls: true,
        sources: [
            {
                src: '/demo.mp4',
                type: 'video/mp4'
            }
        ],
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2, 2.5, 3],
        autoplay: true
    }

    useEffect(() => {
        player.current = videojs(video.current, options);
    }, []);

    const update = () => {
        player.current.src({
            src: '/demo.mp4',
            type: 'video/mp4'
        })
    }

    const uploadAndPlay = (e) => {
        const input = e.target;
        const file = input.files[0];
        console.log(file);
        const url = URL.createObjectURL(file);

        player.current.src({
            src: url,
            type: file.type
        })
    }

    const design = (
        <>
            <div className='w-6/12'>
                <video
                    ref={video}
                    className='video-js vjs-big-play-centered'
                />
                <Button
                    onClick={(update)}
                    className='py-5 m-3'
                >Next Video</Button>
                <input
                    type='file'
                    onChange={uploadAndPlay}
                />
            </div>
        </>
    );
    return design;
}

export default VideoPlayer;