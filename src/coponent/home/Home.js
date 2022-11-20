import videohomepage from "../../assets/video-1920.mp4"

import { useSelector } from "react-redux";
const Home = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const account = useSelector(state => state.user.account)
    return (

        <div className="home-container">

            <video autoPlay muted loop >
                <source src={videohomepage} type="video/mp4" />

            </video>
            <div className="home-content">
                <div className="title-1">
                    <h1>There's a better way to ask</h1>
                </div>

                <div className="title-2">
                    You don't want to make a boring form. And your audience won't answer one.
                    Create a typeform instead—and make everyone happy.

                </div>

                <div className="title-3">
                    <button>Get started- it's free</button>

                </div>
            </div>
        </div >
    )
}
export default Home;