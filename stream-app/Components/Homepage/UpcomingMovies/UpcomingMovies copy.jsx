import { Slider } from "../../../Tailwind";

const UpcomingMovies = () => {

    const data = [
        {
            thumbnail: 'sanddust2.jpg',
            title: 'Sanddust 2',
            duration: '02:00:00'
        },
        {
            thumbnail: 'movie-abc.png',
            title: 'KingKong',
            duration: '01:50:00'
        },
        {
            thumbnail: 'movie-xyz.png',
            title: 'God Zilla',
            duration: '03:20:00'
        },
        {
            thumbnail: 'sanddust2.jpg',
            title: 'Sanddust 2',
            duration: '02:00:00'
        },
        {
            thumbnail: 'movie-abc.png',
            title: 'KingKong',
            duration: '01:50:00'
        },
        {
            thumbnail: 'movie-xyz.png',
            title: 'God Zilla',
            duration: '03:20:00'
        },
        {
            thumbnail: 'sanddust2.jpg',
            title: 'Sanddust 2',
            duration: '02:00:00'
        },
        {
            thumbnail: 'movie-abc.png',
            title: 'KingKong',
            duration: '01:50:00'
        },
        {
            thumbnail: 'movie-xyz.png',
            title: 'God Zilla',
            duration: '03:20:00'
        },
        {
            thumbnail: 'sanddust2.jpg',
            title: 'Sanddust 2',
            duration: '02:00:00'
        },
        {
            thumbnail: 'movie-abc.png',
            title: 'KingKong',
            duration: '01:50:00'
        },
        {
            thumbnail: 'movie-xyz.png',
            title: 'God Zilla',
            duration: '03:20:00'
        }
    ]

    const design = (
        <>
            <div>
                <h1 className="sm:text-3xl mb-4 text-white">
                    UPCOMING MOVIES
                </h1>
                <Slider data={data} />
            </div>
        </>
    );
    return design;
}

export default UpcomingMovies;