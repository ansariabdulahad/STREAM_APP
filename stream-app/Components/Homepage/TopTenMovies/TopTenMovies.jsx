import { useSelector } from "react-redux";
import { Slider } from "../../../Tailwind";

const TopTenMovies = ({ latest }) => {

    const { AnimationReducer } = useSelector(response => response);
    const { image } = AnimationReducer;

    const design = (
        <>
            <div
                className="rounded-lg shadow-lg shadow-slate-900"
                style={{
                    height: 600,
                    transition: '0.5s ease',
                    background: `url(${image ? image : 'sanddust2.jpg'}) center center no-repeat`,
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
                        <Slider data={latest} verticle={true} />
                    </div>
                </div>
            </div>
        </>
    );
    return design;
}

export default TopTenMovies;