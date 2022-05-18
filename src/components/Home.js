import {useState, useEffect} from "react";
import star from './raw/attributes/star-yugi.png';
import LikeButton from "./LikeButton";
import {setRaceImages, setAttributes} from './Utility'
import Selector from "./Selector";
import {ImageList, ImageListItem} from "@mui/material";

export default function Home() {

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
    const [archetype, setArchetype] = useState('');
    const [cardSets, setCardsets] = useState([]);
    const [cardPrices, setCardPrices] = useState([]);
    const [isMagicTrap, setIsMagicTrap] = useState(false);

    /*dynamic array charges */
    const [promiseArray, setTypeArray] = useState([]);
    const [levelArray, setLevelArray] = useState([]);
    const [attributeArray, setAttributeArray] = useState([]);
    const [raceArray, setRaceArray] = useState([]);

    /*checkers*/
    const [nameIntroduced, setNameIntroduced] = useState(false);
    const [multipleResults, setMultipleResults] = useState(false);

    /*charges all the cards in an array*/
    const [completeArrayCards, setCompleteArrayCards] = useState([]);

    /*charges one specified by name card in an array*/
    const [cardFoundIndividual, setCardFoundIndividual] = useState([]);
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        async function apiCall() {
            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
            const req = await fetch(url);
            const data = await req.json();

            /*get all cards*/
            let getAllCards = () => data.data.map(e => {
                return {
                    name: e.name,
                    type: e.type,
                    desc: e.desc,
                    atk: e.atk,
                    def: e.def,
                    level: e.level,
                    race: e.race,
                    attribute: e.attribute,
                    archetype: e.archetype,
                    card_sets: e.card_sets,
                    image: e.card_images[0],
                    card_prices: e.card_prices[0]
                }
            });
            setCompleteArrayCards(getAllCards);

            /*get types*/
            let arrayAux = [];
            let getAllTypes = () => data.data.map(e => {
                return {
                    type: e.type
                }
            });
            getAllTypes().filter((e) => {
                if (!arrayAux.includes(e.type)) arrayAux.push(e.type);
                return arrayAux;
            });
            setTypeArray(arrayAux.map(e => {
                return {
                    value: e, label: e
                }

            }).sort((a, b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)));

            /*get attributes*/
            let arrayAuxAttributes = [];
            let getAllAttributes = () => data.data.map(e => {
                return {
                    attribute: e.attribute
                };
            });
            getAllAttributes().filter((e) => {
                if (!arrayAuxAttributes.includes(e.attribute)) arrayAuxAttributes.push(e.attribute);
                return arrayAuxAttributes;
            });
            setAttributeArray(arrayAuxAttributes.map(e => {
                return {
                    value: e, label: e
                }
            }).sort((a, b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)));

            /*get levels*/
            let arrayLvlsAux = [];
            let getAllLevels = () => data.data.map(e => {
                return {
                    level: e.level
                };
            });
            getAllLevels().filter((e) => {
                if (!arrayLvlsAux.includes(e.level)) arrayLvlsAux.push(e.level);
                return arrayLvlsAux;
            });
            setLevelArray(arrayLvlsAux.map(e => {
                return {
                    value: e, label: e
                }
            }).sort((a, b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)));

            /*get races*/
            let arrayRacesAux = [];
            let getAllRaces = () => data.data.map(e => {
                return {
                    race: e.race
                };
            });

            getAllRaces().filter((e) => {
                if (!arrayRacesAux.includes(e.race)) arrayRacesAux.push(e.race);
                return arrayRacesAux;
            });
            setRaceArray(arrayRacesAux.map(e => {
                return {
                    value: e, label: e
                }
            }).sort((a, b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)));

        }

        apiCall().then();
    }, []);

    /*handleChange name*/
    let handleChange = e => {
        const {name, value} = e.target;
        name === 'name' ? setName(value) : alert('error');
    }

    /*handleChange type*/
    let handleSelectTypeChange = ({value}) => {
        setType(value);
        console.log('value: ' + value);

        async function getByType() {

            let cardTypeFound = completeArrayCards.filter((e) => e.type === value);
            let arrayImages = Object.keys(cardTypeFound[0].image)
                .map(function (key) {
                    return cardTypeFound[0].image[key];
                });
            let getAllByType = () => cardTypeFound.map(e => {
                return {
                    name: e.name,
                    type: e.type,
                    image: arrayImages[1]
                };
            });

            console.log(getAllByType());

        }

        getByType();

    }

    /*handleChange type*/
    let handleSelectRaceChange = ({value}) => {
        setRace(value);
        console.log('value: ' + value);

        async function getByRace() {

            let cardRaceFound = completeArrayCards.filter((e) => e.race === value);
            let arrayImages = Object.keys(cardRaceFound[0].image)
                .map(function (key) {
                    return cardRaceFound[0].image[key];
                });
            let getAllByRace = () => cardRaceFound.map(e => {
                return {
                    name: e.name,
                    race: e.race,
                    image: arrayImages[1]
                };
            });

            console.log(getAllByRace());

        }

        getByRace();

    }

    /*handleChange level*/
    let handleSelectLevelChange = ({value}) => {
        setLevel(value);
        console.log('value: ' + value);

        async function getByLevel() {

            let cardLevelFound = completeArrayCards.filter((e) => e.level === value);
            let arrayImages = Object.keys(cardLevelFound[0].image)
                .map(function (key) {
                    return cardLevelFound[0].image[key];
                });
            let getAllByLevel = () => cardLevelFound.map(e => {
                return {
                    name: e.name,
                    level: e.level,
                    image: arrayImages[1]
                };
            });

            console.log(getAllByLevel());

        }

        getByLevel();

    }

    /*handleChange attribute*/
    let handleSelectAttributeChange = ({value}) => {
        setAttribute(value);
        console.log('value: ' + value);

        async function getByAttribute() {

            let cardAttributeFound = completeArrayCards.filter((e) => e.attribute === value);
            let arrayImages = Object.keys(cardAttributeFound[0].image)
                .map(function (key) {
                    return cardAttributeFound[0].image[key];
                });
            let getAllByAttribute = () => cardAttributeFound.map(e => {
                return {
                    name: e.name,
                    attribute: e.attribute,
                    image: arrayImages[1]
                };
            });

            console.log(getAllByAttribute());

        }

        getByAttribute();

    }

    /*handleChange atk*/
    let handleSelectAtkChange = e => {
        const {atk, value} = e.target;
        atk === 'atk' ? setAtk(value) : alert('error');
    }

    let handleSubmit = async e => {
        e.preventDefault();

            try {
                setNameIntroduced(true);
                let cardFound = completeArrayCards.filter((e) => e.name.toLowerCase() === name.toLowerCase());
                setCardFoundIndividual(cardFound);
                let arrayImages = Object.keys(cardFound[0].image)
                    .map(function (key) {
                        return cardFound[0].image[key];
                    });

                if (cardFound[0].name !== null) {
                    setFound(true);
                    setName(cardFound[0].name);
                    setType(cardFound[0].type);
                    setImage(arrayImages[1]);
                    setAttribute(cardFound[0].attribute || cardFound[0].type);
                    setDescription(cardFound[0].desc);
                    setLevel(cardFound[0].level);
                    setRace(cardFound[0].race);
                    setAtk(cardFound[0].atk);
                    setDef(cardFound[0].def);
                    setArchetype(archetype);
                    setCardsets(cardFound[0].card_sets);
                    setCardPrices(Object.keys(cardFound[0].card_prices)
                        .map(function (key) {
                            return cardFound[0].card_prices[key];
                        }));

                    if (type === 'Spell Card' || type === 'Trap Card') setIsMagicTrap(true);
                }


            } catch (err) {
                console.log(err);
                setFound(false);
            }

    }

    let handleSubmitFields = async e => {
        e.preventDefault();
        if (type != null) {
            try {
                setMultipleResults(true);
                let cardsFound = completeArrayCards.filter((e) => e.type === type);
                let cardImages = cardsFound.map(e => {
                    return {
                        image: e.image.image_url
                    }
                });
                let cardImagesArray = cardImages.map( (e) => e.image );
                console.log(cardImages);
                setCardList(cardImagesArray);

            } catch (err) {
                console.log(err);
            }
        }
    }

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
                archetype: archetype,
                card_sets: cardSets,
                image: image,
                card_prices: cardPrices
            })
        });

        const content = await rawResponse.json();
        console.log(content);
    }
    let placeholder = '';
    return (
        <>
            <div id={'main-container'}>

                <div id={'searcher'}>

                    <div id={'name-container-searcher'}>
                        <form onSubmit={handleSubmit}>

                            <div id={'container-input-name-search'}>
                                <p className={'text-labels'}> name:</p>
                                <input id={'input-name-search'} type={'text'} placeholder={'card name...'} name={'name'}
                                       onChange={handleChange}/>
                            </div>

                            <div id={'container-button-search-name'}>
                                <input id={'button-multiple-formulary'} className={'links'} type={'submit'}
                                       value={'search by name'}/>
                            </div>


                        </form>
                    </div>


                    <div id={'main-container-searcher'}>
                        <form onSubmit={handleSubmitFields}>

                            <div id={'container-input-type-search'}>
                                <p className={'text-labels'}> type:</p>
                                <Selector placeholder={placeholder = 'select type'} options={promiseArray}
                                          onChange={handleSelectTypeChange}/>

                            </div>

                            <div id={'container-race-level-search'}>
                                <p className={'text-labels'}> race:</p>
                                <Selector placeholder={placeholder = 'select race'} options={raceArray}
                                          onChange={handleSelectRaceChange}/>

                            </div>

                            <div id={'container-input-level-search'}>
                                <p className={'text-labels'}> level:</p>
                                <Selector placeholder={placeholder = 'select level'} options={levelArray}
                                          onChange={handleSelectLevelChange}/>
                            </div>

                            <div id={'container-input-attribute-search'}>
                                <p className={'text-labels'}> attribute:</p>
                                <Selector placeholder={placeholder = 'select attribute'} options={attributeArray}
                                          onChange={handleSelectAttributeChange}/>
                            </div>

                            <div id={'container-atk-def'}>
                                <div id={'container-input-atk-search'}>
                                    <p className={'text-labels'}> atk :</p>
                                    <input id={'input-atk-search'} className={'atk-def'} type={'text'}
                                           name={'atk'} placeholder={'min atk'} onChange={handleSelectAtkChange}/>
                                </div>

                                <div id={'container-input-def-search'}>
                                    <p className={'text-labels'}> def :</p>
                                    <input id={'input-def-search'} className={'atk-def'} type={'text'}
                                           placeholder={'min def'}/>
                                </div>
                            </div>

                            <div id={'container-button-search'}>
                                <input id={'button-search-formulary'}
                                       className={'links'} type={'submit'} value={'search'}/>

                            </div>

                        </form>

                    </div>

                </div>


                <div id={'main-container-search-results'}>
                    {multipleResults  && <div id={'multiple-results-container'}>

                        <div id={'multiple-results'}>
                            <div id={'multiple-cards'}>
                                {cardList.map( (d, idx)=> {
                                    return (<div key={idx} >
                                        <img src={d} alt={'image'}/>
                                    </div>)
                                })}

                            </div>
                        </div>

                    </div>}
                    <div id={'result-container'}>
                        {found && <img id={'image-card'} src={image} alt={'card received'}/>}
                    </div>
                    <div id={'result-data-container'}>
                        {found && <div id={'result-data'}>
                            <p id={'name-result-card'}> {cardFoundIndividual[0].name}  </p>
                            <p> {cardFoundIndividual[0].type}  </p>
                            <div id={'lvl-atr'}>
                                <div id={'stars'}><img id={'levels'} src={star} alt={'level'}/>
                                    <span>x</span> {cardFoundIndividual[0].level}
                                </div>
                                <div id={'atr'}><img id={'attribute-image'}
                                                     src={setAttributes(cardFoundIndividual[0].attribute)}
                                                     alt={'type-attribute'}/></div>
                                <div id={'race'}><img id={'race-img'} alt={'race'}
                                                      src={setRaceImages(cardFoundIndividual[0].race)}/>
                                    <span>[{cardFoundIndividual[0].race}</span><span>{type === 'Normal Monster' ? '' : '/' + cardFoundIndividual[0].type}]</span>
                                </div>
                            </div>
                            <div id={'description-card'}>
                                <blockquote>
                                    {description}
                                </blockquote>
                            </div>

                            <br/>

                            <div id={'atk-def-results'}>
                                {!isMagicTrap && <div><span id={'atk-results'}> ATK/ {atk} DEF/ {def}</span></div>}
                                <button onClick={handleSubmitLike} id={'card-liked'}>like</button>
                            </div>

                        </div>}

                    </div>


                </div>

            </div>


            {found && nameIntroduced && <div id={'card-sets-prices-container'}>
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
