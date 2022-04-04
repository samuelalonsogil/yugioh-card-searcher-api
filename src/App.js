
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import RandomCard from "./components/RandomCard";


export default function App(){
    return (

        <div>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />

            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

            <div id={'main-page'}>
                <Navbar/>
                    <Routes>
                        <Route path={'/'} element = {<Home/>} />
                        <Route path={'randomCard'} element = {<RandomCard/>} />
                    </Routes>
            </div>


        </div>
    );
}