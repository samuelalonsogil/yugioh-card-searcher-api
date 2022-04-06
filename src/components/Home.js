import {useState} from "react";
import sadyugi from './raw/Yu-Gi-Oh-Sad-2.jpg';
import spell from './raw/spell-yugi.png';
import trap from './raw/trap-yugi.png';
import dark from './raw/dark-yugi.png';
import light from './raw/light-yugi.png';
import wind from './raw/wind-yugi.png';
import fire from './raw/fire-yugi.png';
import earth from './raw/earth-yugi.png';
import water from './raw/water-yugi.png';
import divine from './raw/divine-yugi.png';
import star from './raw/star-yugi.png';
import aqua from './raw/races/aqua-yugi.png';
import beastWarrior from './raw/races/beast-warrior-yugi.png';
import beast from './raw/races/beast-yugi.png';
import creatorGod from './raw/races/creator-god-yugi.png';
import cyberse from './raw/races/cyberse-yugi.png';
import dinosaur from './raw/races/dinosaur-yugi.png';
import divineBeast from './raw/races/divine-beast-yugi.png';
import dragon from './raw/races/dragon-yugi.png';
import fairy from './raw/races/fairy-yugi.png';
import fiend from './raw/races/fiend-yugi.png';
import fish from './raw/races/fish-yugi.png';
import insect from './raw/races/insect-yugi.png';
import machine from './raw/races/machine-yugi.png';
import plant from './raw/races/plant-yugi.png';
import psychic from './raw/races/psychic.png';
import pyro from './raw/races/pyro.png';
import reptile from './raw/races/reptile.png';
import rock from './raw/races/rock.png';
import seaSerpent from './raw/races/sea-serpent.png';
import spellCaster from './raw/races/spellcaster-png.webp';
import thunder from './raw/races/thunder.png';
import warrior from './raw/races/warrior.png';
import wingedBeast from './raw/races/winged-beast.png';
import wyrm from './raw/races/wyrm.png';
import zombie from './raw/races/zombie.png';


function setRaceImages(race){
    if (race === 'Aqua') return aqua;
    else if (race === 'Beast-Warrior') return beastWarrior;
    else if (race === 'Beast') return beast;
    else if (race === 'Creator-God') return creatorGod;
    else if (race === 'Cyberse') return cyberse;
    else if (race === 'Dinosaur') return dinosaur;
    else if (race === 'Divine-Beast') return divineBeast;
    else if (race === 'Dragon') return dragon;
    else if (race === 'Fairy') return fairy;
    else if (race === 'Fiend') return fiend;
    else if (race === 'Fish') return fish;
    else if (race === 'Insect') return insect;
    else if (race === 'Machine') return machine;
    else if (race === 'Plant') return plant;
    else if (race === 'Psychic') return psychic;
    else if (race === 'Pyro') return pyro;
    else if (race === 'Reptile') return reptile;
    else if (race === 'Rock') return rock;
    else if (race === 'Sea Serpent') return seaSerpent;
    else if (race === 'Spellcaster') return spellCaster;
    else if (race === 'Thunder') return thunder;
    else if (race === 'Warrior') return warrior;
    else if (race === 'Winged Beast') return wingedBeast;
    else if (race === 'Wyrm') return wyrm;
    else if (race === 'Zombie') return zombie;

}

function setAttributes(attribute) {
    if (attribute === 'Spell Card') return spell;
    else if (attribute === 'Trap Card') return trap;
    else if (attribute === 'FIRE') return fire;
    else if (attribute === 'WATER') return water;
    else if (attribute === 'LIGHT') return light;
    else if (attribute === 'DARK') return dark;
    else if (attribute === 'WIND') return wind;
    else if (attribute === 'EARTH') return earth;
    else if (attribute === 'DIVINE') return divine;
}

export default function Home() {
    const [name, setName] = useState('');
    const [found, setFound] = useState(false);
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [attribute, setAttribute] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [race, setRace] = useState('');
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    const [cardSets, setCardsets] = useState([]);
    const [cardPrices, setCardPrices] = useState([]);



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
            let attribute = data.data[0].attribute || data.data[0].type;
            let desc = data.data[0].desc;
            let lvl = data.data[0].level;
            let _race = data.data[0].race;
            let attack =  data.data[0].atk;
            let deffense =  data.data[0].def;
            let cardSet = data.data[0].card_sets;
            let price = data.data[0].card_prices;

            if (cardName === null) {
                setName('');
                setFound(false);
                setImage('');
                setType('');
                setAttribute('');
                setDescription('');
                setLevel('');
                setRace('');
                setAtk('');
                setDef('');
                setCardsets([]);
                setCardPrices([]);
            } else {
                setName(cardName);
                setType(cardType);
                setImage(cardImage);
                setAttribute(attribute);
                setFound(true);
                setDescription(desc);
                setLevel(lvl);
                setRace(_race);
                setAtk(attack);
                setDef(deffense);
                setCardsets(cardSet);
                setCardPrices(price);
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
                            <input id={'input-name-search'} type={'text'} placeholder={'card name...'} name={'name'}
                                   onChange={handleChange}/>
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
                                <input id={'input-atk-search'} className={'atk-def'} type={'text'}
                                       placeholder={'min atk'}/>
                            </div>

                            <div id={'container-input-def-search'}>
                                <p className={'text-labels'}> def :</p>
                                <input id={'input-def-search'} className={'atk-def'} type={'text'}
                                       placeholder={'min def'}/>
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
                        {found && <div id={'result-data'}>
                            <p id={'name-result-card'}> {name}  </p>
                            <p> {type}  </p>
                            <div id={'lvl-atr'}>
                                <div id={'stars'}> <img id={'levels'} src={star} alt={'level'}/> <span>x</span> {level}</div>
                                <div id={'atr'}> <img id={'attribute-image'} src={setAttributes(attribute)} alt={'image-attribute'}/> </div>
                                <div id={'race'}> <img id={'race-img'} alt={'race'} src={setRaceImages(race)}/> <span>[{race}</span><span>{type==='/Effect Monster'? type : ''}]</span></div>
                            </div>
                            <div id={'description-card'}>
                                <blockquote>
                                    {description}
                                </blockquote>
                            </div>

                            <br/>

                            <div id={'atk-def-results'}>
                                <span id={'atk-results'}> ATK/ {atk}</span>  <span id={'def-results'}>DEF/ {def}</span>
                                <br/>
                                <br/>
                                <br/>

                            </div>

                        </div>}

                    </div>


                </div>

            </div>



            {found && <div id={'card-sets-results'}>
                <h3>Card sets:</h3>
                {cardSets.map(function(d, idx){
                    return (<div key={idx} id={'card-sets-list'}>
                        <li>{d.set_name }</li>
                        <p>code: {d.set_code}</p>
                        <p>rarity: {d.set_rarity} </p>
                        <p>price: {d.set_price}</p>
                    </div>)
                })}
            </div>}


            {found && <div id={'card-prices-results'}>
                <h3>Card prices:</h3>
                {cardPrices.map(function(d, idx){
                    return (<div key={idx} id={'card-prices-list'}>
                        <li>{d.cardmarket_price }</li>
                        <li>{d.tcgplayer_price}</li>
                        <li>{d.amazon_price} </li>
                        <li>coolstufffinc: {d.coolstuffinc_price}</li>
                    </div>)
                })}
            </div>}
        </>
    )

}