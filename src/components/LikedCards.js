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
    const [isMagicTrap, setIsMagicTrap] = useState(false);

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

    return ( <>

    </> )
}