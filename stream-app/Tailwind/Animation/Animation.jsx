import { Icon } from "..";

export const Carousel = ({
    data,
    height = 670,
    arrow = true,
    dots = true,
    counting = true
}) => {

    const Anim = ({ item }) => {
        const a = (
            <div
                style={{
                    width: '100%',
                    height: height,
                    background: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >

            </div>
        );
        return a;
    }

    const design = (
        <>
            <div className="overflow-hidden relative">
                <div
                    className="flex"
                    style={{
                        width: `${100 * data.length}%`,
                    }}
                >
                    {
                        data.map((item, index) => {
                            return <Anim key={index} item={item} />
                        })
                    }
                </div>

                {/* left side control */}
                <div className="absolute left-0 top-0 p-5 
                h-full flex flex-col justify-between">
                    {
                        counting ?
                            <label className="bg-slate-900 bg-opacity-40 p-2 rounded-full text-white shadow-lg">
                                1/3
                            </label> : <label></label>
                    }
                    {
                        arrow ?
                            <button>
                                <Icon className="text-white shadow-2xl">arrow_back_ios</Icon>
                            </button> : null
                    }
                    <label></label>
                </div>

                {/*right side control*/}
                <div className="absolute right-0 top-0 p-5 
                h-full flex flex-col justify-between">
                    <label></label>
                    {
                        arrow ?
                            <button>
                                <Icon className="text-white shadow-2xl">arrow_forward_ios</Icon>
                            </button> : null
                    }
                    <label></label>
                </div>

                {/*botton side control*/}
                {
                    dots ?
                        <div className="absolute left-0 bottom-0 p-5 w-full flex justify-center">
                            <div className="flex gap-3">
                                {
                                    data.map((item, index) => {
                                        return (
                                            <>
                                                <button
                                                    className="rounded-lg shadow-sm"
                                                    style={{
                                                        width: '50px',
                                                        height: '5px',
                                                        background: 'rgba(255, 255, 255, 0.3)'
                                                    }}
                                                >
                                                </button>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div> : null
                }
            </div>
        </>
    );
    return design;
}

export default Carousel;