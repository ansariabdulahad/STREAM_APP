import LatestMovies from "../LatestMovies/LatestMovies";

const UpcomingMovies = ({ latest, title }) => {
    const design = (
        <>
            <>
                <LatestMovies latest={latest} title={title} />
            </>
        </>
    );
    return design;
}

export default UpcomingMovies;