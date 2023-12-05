export const Carousel = ({ data, height = 720 }) => {

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
            <div>
                <div>
                    {
                        data.map((item, index) => {
                            return <Anim key={index} item={item} />
                        })
                    }
                </div>
            </div>
        </>
    );
    return design;
}

export default Carousel;