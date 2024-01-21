import { Slider } from "../../../Tailwind";
import LatestMovies from "../LatestMovies/LatestMovies";

const TrendingMovies = ({ latest, title }) => {

    const design = (
        <>
            <>
                <LatestMovies latest={latest} title={title} />
            </>
        </>
    );
    return design;
}

export default TrendingMovies;