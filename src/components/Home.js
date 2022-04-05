import {useState} from "react";
import sadyugi from './raw/Yu-Gi-Oh-Sad-2.jpg';
import spell from './raw/spell-yugi.png';
import trap from './raw/trap-yugi.png';
import dark from './raw/darkness-yugi.png';
import light from './raw/light-yugi.png';
import wind from './raw/wind-yugi.png';
import fire from './raw/fire-yugi.png';
import earth from './raw/earth-yugi.png';
import water from './raw/water-yugi.png';
import divine from './raw/divine-yugi.png';

function setAttributes(attribute){
    if (attribute==='Spell Card') return spell;
    else if (attribute==='Trap Card') return trap;
    else if (attribute==='FIRE') return fire;
    else if (attribute==='WATER') return water;
    else if (attribute==='LIGHT') return light;
    else if (attribute==='DARK') return dark;
    else if (attribute==='WIND') return wind;
    else if (attribute==='EARTH') return earth;
    else if (attribute==='DIVINE') return divine;
}

export default function Home() {
    const [name, setName] = useState('');
    const [found, setFound] = useState(false);
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [attribute, setAttribute] = useState('');


    let handleSubmit = async e => {
        e.preventDefault();

        try {
            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`;
            const req = await fetch(url);
            const data = await req.json();

            console.log(data.data[0].name);

            let cardName = data.data[0].name;
            let cardType = data.data[0].type;
            let cardImage = data.data[0].card_images[0].image_url;
            let attribute = data.data[0].attribute;

            if (cardName === null) {
                setName('');
                setFound(false);
                setImage('');
                setType('');
                setAttribute('');
            } else {
                setName(cardName);
                setType(cardType);
                setImage(cardImage);
                setAttribute(attribute);
                setFound(true);
            }

        } catch (err) {
            setImage(sadyugi);
            console.log(err);
            setFound(false);
        }

    }

    let handleChange = e => {
        const {name, value} = e.target;
        name === 'name' ? setName(value) : alert('error');
    }

    return (
        <>
            <div id={'main-container'}>
                <div id={'main-container-searcher'}>

                    <form onSubmit={handleSubmit}>
                        <div id={'container-input-name-search'}>
                            <p className={'text-labels'}> name of the card:</p>
                            <input id={'input-name-search'} type={'text'} placeholder={'card name...'} name={'name'} onChange={handleChange}/>
                        </div>

                        <div id={'container-input-type-search'}>
                            <p className={'text-labels'}> type of the card:</p>
                            <select id={'input-type-search'} name={'card-type'} className={'selector'}>

                            </select>
                        </div>

                        <div id={'container-input-attribute-search'}>
                            <p className={'text-labels'}> attribute of the card:</p>
                            <select id={'input-attribute-search'} name={'card-attribute'}>

                            </select>
                        </div>

                        <div id={'container-input-level-search'}>
                            <p className={'text-labels'}> level of the card:</p>
                            <select id={'input-level-search'} name={'card-level'}>

                            </select>
                        </div>

                        <div id={'container-race-level-search'}>
                            <p className={'text-labels'}> race of the card:</p>
                            <select id={'input-race-search'} name={'card-race'}>

                            </select>
                        </div>

                        <div id={'container-atk-def'}>
                            <div id={'container-input-atk-search'}>
                                <p className={'text-labels'}> atk :</p>
                                <input id={'input-atk-search'}  className={'atk-def'} type={'text'} placeholder={'min atk'}/>
                            </div>

                            <div id={'container-input-def-search'} >
                                <p className={'text-labels'}> def :</p>
                                <input id={'input-def-search'} className={'atk-def'} type={'text'} placeholder={'min def'}/>
                            </div>
                        </div>

                        <div id={'container-button-search'}>
                            <input id={'button-search-formulary'} className={'links'} type={'submit'} value={'search'}/>
                        </div>

                    </form>

                </div>

                <div id={'main-container-search-results'}>
                    <div id={'result-container'}>
                        {found && <img id={'image-card'} src={image} alt={'image received'}/>}
                    </div>
                    <div id={'result-data-container'}>
                        {found && <div>
                            <p> {name}  </p>
                            <p> {type}  </p>
                            <img id={'attribute-image'} src={setAttributes(attribute)} />
                        </div>}

                    </div>

                </div>
            </div>
        </>
    )

}