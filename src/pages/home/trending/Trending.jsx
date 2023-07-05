import { useState } from "react"

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTab from "../../../components/switchTabs/SwitchTab"

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
        </div>
    )
}

export default Trending