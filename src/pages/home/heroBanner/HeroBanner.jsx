import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import { useSelector } from "react-redux"
import Img from "../../../components/lazyLoadImage/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import "./style.scss"

const HeroBanner = () => {
    const { data, loading } = useFetch("/movie/upcoming");
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);

    useEffect(() => {
        const random = Math.floor(Math.random() * 20);
        const bg = url.backdrop + data?.results?.[random]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className="heroBanner">
            {!loading && <div className="backdrop-img">
                <img src={background} alt="background-img" />
            </div>}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subtitle">Millions of movies, TV shows and people to discover. Explore now.</span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie, tv show or person..."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner