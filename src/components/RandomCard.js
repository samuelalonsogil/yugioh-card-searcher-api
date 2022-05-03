import star from "./raw/attributes/star-yugi.png";
import {useCallback, useEffect, useState} from "react";
import aqua from "./raw/races/aqua-yugi.png";
import beastWarrior from "./raw/races/beast-warrior-yugi.png";
import beast from "./raw/races/beast-yugi.png";
import creatorGod from "./raw/races/creator-god-yugi.png";
import cyberse from "./raw/races/cyberse-yugi.png";
import dinosaur from "./raw/races/dinosaur-yugi.png";
import divineBeast from "./raw/races/divine-beast-yugi.png";
import dragon from "./raw/races/dragon-yugi.png";
import fairy from "./raw/races/fairy-yugi.png";
import fiend from "./raw/races/fiend-yugi.png";
import fish from "./raw/races/fish-yugi.png";
import insect from "./raw/races/insect-yugi.png";
import machine from "./raw/races/machine-yugi.png";
import plant from "./raw/races/plant-yugi.png";
import psychic from "./raw/races/psychic.png";
import pyro from "./raw/races/pyro.png";
import reptile from "./raw/races/reptile.png";
import rock from "./raw/races/rock.png";
import seaSerpent from "./raw/races/sea-serpent.png";
import spellCaster from "./raw/races/spellcaster-png.webp";
import thunder from "./raw/races/thunder.png";
import warrior from "./raw/races/warrior.png";
import wingedBeast from "./raw/races/winged-beast.png";
import wyrm from "./raw/races/wyrm.png";
import zombie from "./raw/races/zombie.png";
import normalSpell from "./raw/spell-trap-types/normal-spell.png";
import fieldSpell from "./raw/spell-trap-types/field-spell.png";
import equipSpell from "./raw/spell-trap-types/equip-spell.png";
import continuousSpell from "./raw/spell-trap-types/continuous-spell.png";
import quickPlay from "./raw/spell-trap-types/quick-play-spell.png";
import ritualSpell from "./raw/spell-trap-types/ritual-spell.png";
import normalTrap from "./raw/spell-trap-types/normal-trap.png";
import continuousTrap from "./raw/spell-trap-types/continuous-trap.png";
import counterTrap from "./raw/spell-trap-types/counter-trap.png";
import spell from "./raw/attributes/spell-yugi.png";
import trap from "./raw/attributes/trap-yugi.png";
import fire from "./raw/attributes/fire-yugi.png";
import water from "./raw/attributes/water-yugi.png";
import light from "./raw/attributes/light-yugi.png";
import dark from "./raw/attributes/dark-yugi.png";
import wind from "./raw/attributes/wind-yugi.png";
import earth from "./raw/attributes/earth-yugi.png";
import divine from "./raw/attributes/divine-yugi.png";

function setRaceImages(race) {
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
    else if (race === 'Normal') return normalSpell;
    else if (race === 'Field') return fieldSpell;
    else if (race === 'Equip') return equipSpell;
    else if (race === 'Continuous') return continuousSpell;
    else if (race === 'Quick-Play') return quickPlay;
    else if (race === 'Ritual') return ritualSpell;
    else if (race === 'Normal') return normalTrap;
    else if (race === 'Continuous') return continuousTrap;
    else if (race === 'Counter') return counterTrap;

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

export default function RandomCard() {

    /*basic card attributes*/
    const [name, setName] = useState('');
    const [found, setFound] = useState(false);
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [attribute, setAttribute] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState(0);
    const [race, setRace] = useState('');
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    const [cardSets, setCardsets] = useState([]);
    const [cardPrices, setCardPrices] = useState([]);
    const [isMagicTrap, setIsMagicTrap] = useState(false);
    const url = `https://db.ygoprodeck.com/api/v7/randomcard.php`;

    useEffect(() => {

        const fetchData =async () => {
            const data = await fetch(url);
            const json = await data.json();
            console.log(json);
            setFound(true);

            setName(json.name);
            setImage(json.card_images[0].image_url);
            setType(json.type);
            setAttribute(json.attribute || json.type);
            setDescription(json.desc);
            setLevel(json.level);
            setRace(json.race);
            setAtk(json.atk);
            setDef(json.def);
            setCardsets(json.card_sets);
            setCardPrices(json.card_prices);
            if (type === 'Spell Card' || type === 'Trap Card') setIsMagicTrap(true)

        }
        fetchData().catch(console.error);

    }, []);

    return (
        <>
            <div id={'main-container'}>
                <div id={'main-container-search-results'}>
                    <div id={'result-container'}>
                        {found && <img id={'image-card'} src={image} alt={'card received'}/>}
                    </div>

                    <div id={'result-data-container'}>
                        {found && <div id={'result-data'}>
                            <p id={'name-result-card'}> {name}</p>
                            <p> {type}  </p>
                            <div id={'lvl-atr'}>
                                <div id={'stars'}><img id={'levels'} src={star} alt={'level'}/>
                                    <span>x</span> {level}
                                </div>
                                <div id={'atr'}><img id={'attribute-image'} src={setAttributes(attribute)}
                                                     alt={'type-attribute'}/></div>
                                <div id={'race'}><img id={'race-img'} alt={'race'} src={setRaceImages(race)}/>
                                    <span>[{race}</span><span>{type === 'Normal Monster' ? '' : '/' + type}]</span>
                                </div>
                            </div>
                            <div id={'description-card'}>
                                <blockquote>
                                    {description}
                                </blockquote>
                            </div>

                            <br/>

                            <div id={'atk-def-results'}>
                                {!isMagicTrap && <span id={'atk-results'}> ATK/ {atk} DEF/ {def}</span>}
                                <br/>
                                <br/>
                                <br/>

                            </div>

                        </div>}

                    </div>


                </div>

            </div>


            {found && <div id={'card-sets-prices-container'}>
                <div id={'card-sets-results'}>
                    <h3>Card sets:</h3>
                    {cardSets.map(function (d, idx) {
                        return (<div key={idx} id={'card-sets-list'}>
                            <li>{d.set_name}</li>
                            <p>code: {d.set_code}</p>
                            <p>rarity: {d.set_rarity} </p>
                            <p>price: {d.set_price}</p>
                        </div>)
                    })}
                </div>


                <div id={'card-prices-results'}>
                    <h3>Card prices:</h3>
                    {cardPrices.map(function (d, idx) {
                        return (<div key={idx} id={'card-prices-list'}>
                            <li><a href={`https://www.cardmarket.com/es/YuGiOh/Products/Search?searchString=${name}`}
                                   target={'_blank'}> <span>CardMarket</span></a> : {d.cardmarket_price} </li>
                            <li><a href={`https://www.tcgplayer.com/search/all/product?q=${name}&view=grid`}
                                   target={'_blank'}> <span>TCG</span></a> : {d.tcgplayer_price} </li>
                            <li><a
                                href={`https://www.amazon.es/s?k=${name}+card&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ITV8PVFC3948&sprefix=${name}+card%2Caps%2C68&ref=nb_sb_noss`}
                                target={'_blank'}> <span>Amazon</span></a> : {d.amazon_price}  </li>
                            <li><a
                                href={`https://www.coolstuffinc.com/main_search.php?pa=searchOnName&page=1&resultsPerPage=25&q=${name}`}
                                target={'_blank'}> <span>CoolStuffInc</span></a> : {d.coolstuffinc_price}</li>

                            <br/>

                        </div>)
                    })}
                </div>

            </div>}
        </>
    )
}