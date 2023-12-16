'use client';

import { Dialog, FormDesign, Input } from "../../../Tailwind";

const Movies = () => {

    const MovieForm = () => {
        const movie = (
            <FormDesign>
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
                    <Input
                        name={'thumbnail'}
                        type="file"
                        accept="image/*"
                        placeholder="Thumbnail"
                        className='bg-gray-100 p-3 rounded-sm'
                    />
                    <Input
                        name={'movie'}
                        type="file"
                        accept='.mp4'
                        placeholder="Movie"
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
        return movie;
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