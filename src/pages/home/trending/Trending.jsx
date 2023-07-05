import { useState } from "react"

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTab from "../../../components/switchTabs/SwitchTab"
import Carousel from "../../../components/carousel/Carousel"

import useFetch from "../../../hooks/useFetch"

const Trending = () => {
    const [endpoint, setEndPoint] = useState("day")

    const { data, loading } = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week")
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending