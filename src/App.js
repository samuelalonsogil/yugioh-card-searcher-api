
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import RandomCard from "./components/RandomCard";
import LikedCards from "./components/LikedCards";

export default function App(){
    return (

        <div>
            <div id={'main-page'}>
                <Navbar/>
                    <Routes>
                        <Route path={'/'} element = {<Home/>} />
                        <Route path={'/randomCard'} element = {<RandomCard/>} />
                        <Route path={'/likedCards'} element = {<LikedCards/>} />


                    </Routes>
            </div>
        </div>
    );
}