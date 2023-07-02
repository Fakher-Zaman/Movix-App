import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import { useDispatch, useSelector } from "react-redux"
import { getApiConfiguration } from "./store/homeSlice"
// import Header from "./components/header/Header"
// import Footer from "./components/footer/Footer"
// import Home from "./pages/home/Home"
// import Details from "./pages/details/Details"
// import SearchResult from "./pages/searchResult/SearchResult"
// import Explore from "./pages/explore/Explore"
// import PageNotFound from "./pages/pageNotFound/PageNotFound"

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)
  console.log(url);

  useEffect(() => {
    apiTesting()
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then(res => {
        console.log(res)
        dispatch(getApiConfiguration(res))
      });
  }

  return (
    <>
      <div className="App">
        App
        {url?.total_pages}
      </div>
    </>
  )
}

export default App
