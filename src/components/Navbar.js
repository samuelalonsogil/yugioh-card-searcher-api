import {Link} from "react-router-dom";
import logo from "./raw/yugioh-title.png";

export default function Navbar() {
    return <>
        <div id={'navbar'}>
            <div id={'container-logo-buttons'}>
                <img id={'logo'} src={logo} alt={'logo-image-yugioh'}/>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <button id={'search-card-button'} className={'links'}>Search cards</button>
                </Link>
                <Link to='/randomCard' style={{textDecoration: 'none'}}>
                    <button id={'random-card-button'} className={'links'}  >Random card</button>
                </Link>
                <Link to='/likedCards' style={{textDecoration: 'none'}}>
                    <button id={'liked-cards-button'} className={'links'}  >Liked cards</button>
                </Link>
            </div>


        </div>


    </>
}
