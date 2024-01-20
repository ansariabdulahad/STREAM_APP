'use client';

import { useDispatch, useSelector } from "react-redux";
import { Card, Dialog, FormDesign, IconButton } from "../../../Tailwind";
import { useS3 } from "../../../hooks/use.s3";
import { createJob } from "./Movies.action";
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const Movies = () => {

    const [submit, setSubmit] = useState(false);
    const [filename, setFilename] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const [progress, setProgress] = useState({
        thumbnail: 0,
        video: 0
    });
    const dispatch = useDispatch();
    const MoviesReducer = useSelector(response => response.MoviesReducer);

    const options = [
        {
            label: 'Choose a category',
            value: 'choose a category'
        },
        {
            label: 'Drama',
            value: 'drama'
        },
        {
            label: 'Action',
            value: 'action'
        },
        {
            label: 'Comedy',
            value: 'comedy'
        }
    ]

    const fields = [
        {
            component: 'upload',
            props: {
                name: 'thumbnail',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: 'Thumbnail',
                accept: 'image/*'
            }
        },
        {
            component: 'upload',
            props: {
                name: 'video',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: 'Video',
                accept: '.mp4'
            }
        },
        {
            component: 'select',
            props: {
                name: 'category',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                data: options,
                width: "full"
            }
        },
        {
            component: 'input',
            props: {
                name: 'desc',
                placeholder: 'Video Description',
                textarea: true,
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                width: "full"
            }
        },
        {
            component: 'input',
            props: {
                name: 'actorsName',
                placeholder: 'Actors Name',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3'
            }
        },
        {
            component: 'input',
            props: {
                name: 'tags',
                placeholder: 'Keywords',
                textarea: true,
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                width: "full"
            }
        }
    ]

    useEffect(() => {
        if (MoviesReducer.movie_success) {
            setSubmit(false);
        }
    }, [MoviesReducer]);

    const upload = async (fileProps, values) => {

        const log = [];

        for (let data of fileProps) {
            const upload = useS3(values[data.name], data.key);

            const uploading = await upload();

            uploading.on('httpUploadProgress', (e) => {
                let loaded = e.loaded;
                let total = e.total;
                let perc = Math.floor((loaded * 100) / total);

                setProgress((oldData) => {
                    return {
                        ...oldData,
                        [data.name]: perc
                    }
                })
            });

            try {
                const file = await uploading.promise();

                data['success'] = true;
                data['s3'] = file;

                log.push(data);

            } catch (error) {

                data['success'] = false;
                data['error'] = error;

                log.push(data);
            }
        }

        return log;
    }

    const getVideoDuration = async (file) => {
        return new Promise((resolve, reject) => {
            const url = URL.createObjectURL(file);
            let video = document.createElement('video');
            video.src = url;
            video.preload = 'metadata';
            video.onloadedmetadata = () => resolve(video.duration);
        });
    }

    const onSubmit = async (values) => {
        // FOR SINGLE FILE UPLOAD FUNCTION
        // const upload = useS3({
        //     thumbnail: values.thumbnail,
        //     video: values.video
        // });
        dispatch({ type: 'CLOSE_DIALOG' });
        setSubmit(true);

        values.title = values.video.name.toLowerCase().split('.')[0];
        setFilename(values.title);
        values.duration = await getVideoDuration(values.video);

        let videoName = values.video.name;
        let folder = videoName.split('.')[0];

        // FOR MULTIPLE FILE UPLOAD FUNCTIONS
        const fileProps = [
            {
                name: 'thumbnail',
                key: `original/${folder}/${folder}.png`
            },
            {
                name: 'video',
                key: `original/${folder}/${videoName}`
            }
        ];

        const log = await upload(fileProps, values);

        for (let data of fileProps) {
            values[data.name] = data.key;
        }

        dispatch(createJob(values));
    }

    const getData = async (url) => {
        try {
            const response = await axios({
                method: 'GET',
                url: url
            });

            return response.data.data;

        } catch (error) {
            return [];
        }
    }

    const { data, error } = useSWR('/api/movies', getData, { refreshInterval: 5000 });

    useEffect(() => {
        console.log(data, error);
    }, [data, error]);

    const deleteMe = async (id) => {
        setIsLoader(true);
        // TODO: SHOW LOADER WHEN YOUER MONGODB WILL WORK // DELETE FUNCTION 
        await axios({
            method: 'DELETE',
            url: `/api/movies/${id}`
        });

        setIsLoader(false);
    }

    const openDialog = () => {
        dispatch({
            type: 'OPEN_DIALOG'
        })
    }

    const MovieList = ({ item }) => {
        const list = (
            <>
                <>
                    <Card className={'rounded-lg shadow-sm'}>
                        <img src={`${process.env.NEXT_PUBLIC_CLOUDFRONT}/${item.thumbnail}`} width={'100%'} alt="thumbnail"
                            className="rounded-lg mb-3"
                        />
                        <h1 className="font-bold capitalize">
                            {item.title}
                        </h1>
                        <p>{item.desc.slice(0, 100) + "...."}</p>
                        <p className="font-bold my-3">{item.category}</p>
                        <p>{item.keywords}</p>
                        <hr />
                        <div className="flex items-center gap-2 mt-3">
                            <IconButton
                                onClick={openDialog}
                                size="sm"
                                theme="secondary"
                            >
                                edit
                            </IconButton>
                            <IconButton
                                onClick={() => deleteMe(item._id)}
                                size="sm"
                                theme="error"
                            >
                                delete
                            </IconButton>
                        </div>
                    </Card>
                </>
            </>
        );
        return list;
    }

    const Steps = () => {
        const step = (
            <>
                <>
                    <Card title={filename}>
                        <div className="grid grid-cols-4 gap-2">
                            <div>
                                <label className="font-bold mb-1 text-sm">
                                    Thumbnail - {progress.thumbnail + "%"}
                                </label>
                                <div className="bg-gray-200 h-1.5">
                                    <div className="bg-green-500 h-full"
                                        style={{
                                            width: progress.thumbnail + "%"
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="font-bold mb-1 text-sm">
                                    Video - {progress.video + "%"}
                                </label>
                                <div className="bg-gray-200 h-1.5">
                                    <div className="bg-green-500 h-full"
                                        style={{
                                            width: progress.video + "%"
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="font-bold mb-1 text-sm">Job</label>
                                <div className="bg-gray-200 h-1.5 overflow-hidden">
                                    <div className={`bg-green-500 w-0 h-full 
                                ${MoviesReducer.job_loading ? 'infinite' : null}
                                ${MoviesReducer.job_success ? 'w-full' : null}
                                `}>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="font-bold mb-1 text-sm">Finalizing</label>
                                <div className="bg-gray-200 h-1.5 overflow-hidden">
                                    <div className={`bg-green-500 w-0 h-full  
                                ${MoviesReducer.movie_loading ? 'infinite' : null}
                                ${MoviesReducer.movie_success ? 'w-full' : null}
                                `}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </>
            </>
        );
        return step;
    }

    const MovieForm = () => {
        const form = (
            <>
                <>
                    <h1 className="text-xl font-bold text-left mb-3">Add New Video</h1>
                    <FormDesign
                        onSubmit={onSubmit}
                        fields={fields}
                        disabled={submit}
                    />
                </>
            </>
        );
        return form;
    }

    const design = (
        <>
            <>
                {
                    submit ? <Steps /> : null
                }
                <div className="grid sm:grid-cols-4 gap-4">
                    {
                        data && data.map((item, index) => {
                            return <MovieList key={index} item={item} />
                        })
                    }
                </div>
                <Dialog>
                    <MovieForm />
                </Dialog>
            </>
        </>
    );
    return design;
}

export default Movies;