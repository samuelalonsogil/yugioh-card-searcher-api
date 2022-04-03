import {Link} from "react-router-dom";
import logo from "./raw/yugioh-title.png";


export default function Navbar() {
    return <>
        <div id={'navbar'}>
            <img id={'logo'} src={logo} alt={'logo-image-yugioh'}/>
            <Link to='/'> <button id={'search-card-button'} className={'links'} >Search cards</button></Link>
            <Link to='/randomCard'> <button id={'random-card-button'} className={'links'}>Random card</button></Link>
        </div>

    </>
}