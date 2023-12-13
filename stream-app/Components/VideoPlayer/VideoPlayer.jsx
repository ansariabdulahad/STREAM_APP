'use client'

import 'video.js/dist/video-js.css';

// city
// import '@videojs/themes/dist/city/index.css';
// fantasy
import '@videojs/themes/dist/fantasy/index.css';
// forest
// import '@videojs/themes/dist/forest/index.css';
// sea
// import '@videojs/themes/dist/sea/index.css';

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
            <div className='w-9/12'>
                <video
                    ref={video}
                    className='video-js vjs-big-play-centered vjs-theme-fantasy'
                />
            </div>
        </>
    );
    return design;
}

export default VideoPlayer;