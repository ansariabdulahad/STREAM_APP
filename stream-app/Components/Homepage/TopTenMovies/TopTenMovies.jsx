import { Slider } from "../../../Tailwind";

const TopTenMovies = () => {

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
            <div
                className="rounded-lg shadow-lg shadow-slate-900"
                style={{
                    height: 600,
                    background: `url(sanddust2.jpg) center center no-repeat`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="overflow-hidden h-full rounded-lg p-4 sm:p-8"
                    style={{
                        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent)'
                    }}
                >
                    <h1
                        className="text-white text-3xl mb-4"
                    >TOP TEN MOVIES</h1>
                    <div
                        className="relative"
                        style={{
                            width: 330,
                            height: 516
                        }}
                    >
                        <Slider data={data} verticle={true} />
                    </div>
                </div>
            </div>
        </>
    );
    return design;
}

export default TopTenMovies;