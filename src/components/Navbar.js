import {Link} from "react-router-dom";
import logo from "./raw/yugioh-title.png";

export default function Navbar() {
    return <>
        <div id={'navbar'}>
            <img id={'logo'} src={logo} alt={'logo-image-yugioh'}/>
            <Link to='/' style={{textDecoration: 'none'}}>
                <button id={'search-card-button'} className={'links'}>Search cards</button>
            </Link>
            <Link to='/randomCard' style={{textDecoration: 'none'}}>
                <button id={'random-card-button'} className={'links'}>Random card</button>
            </Link>
            <input id={'search-card-bar'} className={'links'} type={'text'} placeholder={'placeholder text'}/>
        </div>


    </>
}