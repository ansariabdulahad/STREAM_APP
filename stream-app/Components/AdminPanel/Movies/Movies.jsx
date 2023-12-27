'use client';

import { useDispatch, useSelector } from "react-redux";
import { Dialog, FormDesign } from "../../../Tailwind";
import { useS3 } from "../../../hooks/use.s3";
import { createJob } from "./Movies.action";
import { useEffect } from "react";

const Movies = () => {

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
            component: 'input',
            props: {
                name: 'title',
                placeholder: 'Title',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
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
                name: 'duration',
                placeholder: 'Video Duration',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3'
            }
        },
        {
            component: 'input',
            props: {
                name: 'staring',
                placeholder: 'Actors Name',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3'
            }
        },
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
                name: 'tags',
                placeholder: 'Keywords',
                textarea: true,
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                width: "full"
            }
        }
    ]

    useEffect(() => {
        if (MoviesReducer.job_success) {
            dispatch({
                type: 'CLOSE_DIALOG'
            });
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

                console.log(perc + '%');
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

    const onSubmit = async (values) => {
        // FOR SINGLE FILE UPLOAD FUNCTION
        // const upload = useS3({
        //     thumbnail: values.thumbnail,
        //     video: values.video
        // });

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

    const MovieForm = () => {
        const form = (
            <>
                <h1 className="text-xl font-bold text-left mb-3">Add New Video</h1>
                <FormDesign
                    onSubmit={onSubmit}
                    fields={fields}
                    grid={2}
                />
            </>
        );
        return form;
    }

    const design = (
        <>
            <Dialog>
                <MovieForm />
            </Dialog>
        </>
    );
    return design;
}

export default Movies;