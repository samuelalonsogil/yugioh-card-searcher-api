import {useEffect, useState} from "react";

export default function(){
    const url = `http://localhost:3001/cards/`;
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
    const [completeArray, setCompleteArray] = useState([]);

    /*<div id={'multiple-results'}>
                            <div id={'multiple-cards'}>
                                {cardList.map( (d, idx)=> {
                                    return (<div key={idx} >
                                        <img src={d} alt={'image'}/>
                                    </div>)
                                })}

                            </div>
                        </div>*/

    useEffect(() => {

        const fetchData =async () => {
            const data = await fetch(url);
            const json = await data.json();
            console.log(json.data);

            setCompleteArray(json.data);
            console.log(completeArray);

            completeArray!==[]?setFound(true):setFound(false);
            console.log(found);

            setName(json.name);
            setImage(json.image);
            setType(json.type);
            setAttribute(json.attribute || json.type);
            setDescription(json.desc);
            setLevel(json.level);
            setRace(json.race);
            setAtk(json.atk);
            setDef(json.def);
            setCardsets(json.card_sets);
            setCardPrices(json.card_prices);
        }
        fetchData().catch(console.error);

    }, []);

    return ( <>

    </> )
}
