import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

import "./style.scss"

import DetailsBanner from "./detailsBanner.jsx/DetailsBanner"

const Details = () => {
    const { mediaType, id } = useParams()
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/videos`)

    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
        </div>
    )
}

export default Details