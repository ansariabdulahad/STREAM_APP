import Header from "./Header/Header";
import LatestMovies from "./LatestMovies/LatestMovies";
import TopTenMovies from "./TopTenMovies/TopTenMovies";
import TrendingMovies from "./TrendingMovies/TrendingMovies";
import UpcomingMovies from "./UpcomingMovies/UpcomingMovies";

const Homepage = () => {
    const design = (
        <>
            <Header />
            <div className="bg-slate-800 p-8 sm:p-16">
                <div className="flex flex-col gap-8 sm:gap-16">
                    <LatestMovies />
                    <UpcomingMovies />
                    <TopTenMovies />
                    <TrendingMovies />
                </div>
            </div>
        </>
    );
    return design;
}

export default Homepage;