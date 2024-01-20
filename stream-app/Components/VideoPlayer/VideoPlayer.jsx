'use client'

import 'video.js/dist/video-js.css';
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
// fantasy
import '@videojs/themes/dist/fantasy/index.css';
// city
// import '@videojs/themes/dist/city/index.css';
// forest
// import '@videojs/themes/dist/forest/index.css';
// sea
// import '@videojs/themes/dist/sea/index.css';

import 'videojs-contrib-quality-levels';
import 'jb-videojs-hls-quality-selector';
import 'videojs-seek-buttons';
import 'videojs-hotkeys';

import videojs from "video.js";
import { useEffect, useRef } from 'react';
import { Button } from '../../Tailwind';

const VideoPlayer = ({ params }) => {

    const video = useRef();
    const player = useRef(null);

    const options = {
        controls: true,
        sources: [
            {
                src: `${process.env.NEXT_PUBLIC_CLOUDFRONT}/stream/original/${params.customTitle}/${params.customTitle}.mpd`,
                type: 'application/dash+xml' // application/x-mpegURL for .m3u8 extension and application/dash+xml for .mpd extension
            }
        ],
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2, 2.5, 3],
        autoplay: true,
        poster: `${process.env.NEXT_PUBLIC_CLOUDFRONT}/${params.thumbnail}`
    }

    const onReady = (v_player) => {
        // FOR FORWARD AND BACKWARD FUNCTIONALITY ONLY
        // v_player.seekButtons({
        //     forward: 30,
        //     back: 10
        // }); // -- NOT WORKING PROPERLY --

        // FOR QUALITY FUNCTIONALITY ONLY
        v_player.hlsQualitySelector({
            displayCurrentQuality: true,
        });

        // FOR KEYBOARD BUTTON FUNCTIONALITY ONLY
        v_player.hotkeys({
            allwayesCaptureHotKeys: true,
            seekStep: 5,
            enableValumeScroll: true
        });
    }

    useEffect(() => {
        player.current = videojs(
            video.current,
            options,
            () => onReady(player.current)
        );
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
            <video
                ref={video}
                className='video-js vjs-big-play-centered vjs-theme-fantasy'
            />
        </>
    );
    return design;
}

export default VideoPlayer;