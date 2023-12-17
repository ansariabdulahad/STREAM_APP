'use client';

import { Dialog, FormDesign } from "../../../Tailwind";

const Movies = () => {

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
                className: 'col-span-2 bg-gray-100 rounded-sm shadow-md border-0 p-3'
            }
        },
        {
            component: 'input',
            props: {
                name: 'desc',
                placeholder: 'Video Description',
                textarea: true,
                className: 'col-span-2 bg-gray-100 rounded-sm shadow-md border-0 p-3'
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
                label: 'Thumbnail'
            }
        },
        {
            component: 'upload',
            props: {
                name: 'video',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                label: 'Video'
            }
        },
        {
            component: 'select',
            props: {
                name: 'category',
                className: 'bg-gray-100 rounded-sm shadow-md border-0 p-3',
                data: options
            }
        },
        {
            component: 'input',
            props: {
                name: 'tags',
                placeholder: 'Keywords',
                textarea: true,
                className: 'col-span-2 bg-gray-100 rounded-sm shadow-md border-0 p-3'
            }
        }
    ]

    const MovieForm = () => {
        const form = (
            <>
                <h1 className="text-xl font-bold text-left mb-3">Add New Video</h1>
                <FormDesign
                    fields={fields}
                    gap={5}
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