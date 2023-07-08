import { useState } from "react"

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTab from "../../../components/switchTabs/SwitchTab"
import Carousel from "../../../components/carousel/Carousel"

import useFetch from "../../../hooks/useFetch"

const TopRated = () => {
    const [endpoint, setEndPoint] = useState("movie")

    const { data, loading } = useFetch(`/${endpoint}/top_rated`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv")
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    )
}

export default TopRated