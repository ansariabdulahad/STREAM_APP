import { Button, Carousel, Icon } from "../../../Tailwind";

const Header = ({ latest }) => {

    const data = [
        {
            image: 'sanddust2.jpg',
            caption: <Caption data={{
                title: 'Dangal',
                rating: 5,
                duration: '02:20:59',
                staring: 'Amir Khan',
                category: 'Comedy, Drama, Action',
                tags: 'Comedy, Drama, Action'
            }} />
        },
        {
            image: 'movie-abc.png',
            caption: <Caption data={{
                title: 'Dhoom',
                rating: 4,
                duration: '02:20:59',
                staring: 'Amir Khan',
                category: 'Comedy, Drama, Action',
                tags: 'Comedy, Drama, Action'
            }} />
        },
        {
            image: 'movie-xyz.png',
            caption: <Caption data={{
                title: 'Baazigar',
                rating: 3,
                duration: '02:20:59',
                staring: 'Shahrukh Khan',
                category: 'Comedy, Drama, Action',
                tags: 'Comedy, Drama, Action'
            }} />
        }
    ]

    const Caption = ({ data }) => {
        const cap = (
            <div className="flex flex-col gap-4 sm:gap-10 sm:px-5">
                <div>
                    <h2
                        className="text-white font-bold text-3xl sm:text-8xl mb-3"
                    >
                        {data.title}
                    </h2>
                    <div className="flex items-center gap-2 sm:gap-16">
                        <div>
                            {
                                Array(data.rating).fill(0).map((item, index) => {
                                    return <Icon key={index} className="text-red-600">star</Icon>
                                })
                            }
                            {
                                Array(5 - data.rating).fill(0).map((item, index) => {
                                    return <Icon key={index} className="text-red-600">star_outline</Icon>
                                })
                            }

                        </div>

                        <p className="text-white text-sm sm:text-lg">
                            <span className="font-bold text-red-500">
                                Duration : &nbsp;
                            </span>
                            {data.duration}
                        </p>
                    </div>
                </div>

                <div className="text-white text-sm sm:text-lg flex flex-col gap-0 sm:gap-2">
                    <p>
                        <span className="font-bold text-red-500">
                            Staring : &nbsp;
                        </span>
                        {data.staring}
                    </p>
                    <p>
                        <span className="font-bold text-red-500">
                            Category : &nbsp;
                        </span>
                        {data.category}
                    </p>
                    <p>
                        <span className="font-bold text-red-500">
                            Tags : &nbsp;
                        </span>
                        {data.tags}
                    </p>
                </div>

                <div>
                    <Button
                        className="flex gap-2 sm:py-3.5 sm:px-6"
                        theme="error"
                    >
                        <Icon>play_circle</Icon> Play Now
                    </Button>
                </div>
            </div>
        );
        return cap;
    }

    const design = (
        <>
            <>
                {/*This will be visible on big screen*/}
                <div className="hidden sm:block">
                    <Carousel
                        data={data}
                        height={600}
                        counting={false}
                    />
                </div>

                {/*This will be visible on small screen*/}
                <div className="sm:hidden block">
                    <Carousel
                        data={data}
                        height={300}
                        counting={false}
                        arrow={false}
                        dots={false}
                    />
                </div>
            </>
        </>
    );
    return design;
}

export default Header;