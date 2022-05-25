import star from "./raw/attributes/star-yugi.png";
import {useEffect, useState} from "react";
import {setRaceImages, setAttributes} from './Utility'

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

    let handleSubmitLike = async (e) => {
        e.preventDefault();
        console.log(name);
        const rawResponse = await fetch('http://localhost:3001/cards/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                type: type,
                desc: description,
                atk: atk, def: def,
                level: level,
                race: race,
                attribute: attribute,
                card_sets: cardSets,
                image: image,
                card_prices: cardPrices
            })
        });

        const content = await rawResponse.json();
        console.log(content);
    }

    return (
        <>
            <div id={'main-container'}>
                <div id={'main-container-search-results'}>
                    <div id={'result-container-random'}>
                        {found && <img id={'image-card-random'} src={image} alt={'card received'}/>}
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
                                <button onClick={handleSubmitLike} id={'card-liked'}>like</button>

                            </div>

                        </div>}

                    </div>


                </div>

            </div>


            {found && <div id={'card-sets-prices-container-random'}>
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
