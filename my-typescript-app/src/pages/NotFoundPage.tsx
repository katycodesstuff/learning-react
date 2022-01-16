import Header from "../components/Header/Header"
import MainPage from "../components/MainPage/MainPage"
import NotFound from "../components/NotFound/NotFound"

function NotFoundPage() {
    return (
       <>
        <Header shadow={true}/>
        <NotFound />
        <MainPage />
       </>
    )
}

export default NotFoundPage
