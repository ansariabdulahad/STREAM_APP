'use client';

import { Dialog, FormDesign, Input, Select } from "../../../Tailwind";

const Movies = () => {

    const data = [
        {
            label: 'Choose category',
            value: 'choose category'
        },
        {
            label: 'Comedy',
            value: 'comedy'
        },
        {
            label: 'Drama',
            value: 'drama'
        },
        {
            label: 'Fantasy',
            value: 'fantasy'
        },
        {
            label: 'Action',
            value: 'action'
        }
    ]
    const fields = ['title', 'desc', 'duration', 'staring', 'thumbnail', 'movie', 'category', 'tags'];
    const fileObject = {
        thumbnail: '',
        movie: ''
    }

    const onSubmit = (values) => {
        console.log(values);
    }

    const handleUpload = (e) => {
        const input = e.target;
        const file = input.files[0];
        const key = input.name;

        fileObject[key] = file;
        console.log(fileObject);
    }

    const MovieForm = () => {
        const form = (
            <FormDesign
                className="text-left"
                onSubmit={onSubmit}
                fields={fields}
            >
                <div className="flex gap-4 flex-col py-4">
                    <Input
                        name={'title'}
                        placeholder='Title'
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <Input
                        name={'desc'}
                        placeholder="Description"
                        textarea
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <Input
                        name={'staring'}
                        placeholder="Staring"
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <Input
                        name={'duration'}
                        placeholder="Duration"
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <div className="flex flex-col">
                        <label className="font-bold text-sm mb-1">Thumbnail</label>
                        <Input
                            name={'thumbnail'}
                            type="file"
                            accept="image/*"
                            className='bg-gray-100 p-3 rounded-sm'
                            onChange={handleUpload}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold text-sm mb-1">Video File</label>
                        <Input
                            name={'movie'}
                            type="file"
                            accept='.mp4'
                            className='bg-gray-100 p-3 rounded-sm'
                            onChange={handleUpload}
                        />
                    </div>
                    <Select
                        name='category'
                        data={data}
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <Input
                        name={'tags'}
                        textarea
                        placeholder="Tags"
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                </div>
            </FormDesign>
        );
        return form;
    }

    const design = (
        <>
            <Dialog
                title={'Add Movie'}
            >
                <MovieForm />
            </Dialog>
        </>
    );
    return design;
}

export default Movies;