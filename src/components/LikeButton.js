import {useState} from "react";

export default function LikeButton(){
    const [name, setName] = useState('');
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

    let handleSubmit = async (e) =>{
        e.preventDefault();
        const rawResponse = await fetch( 'http://localhost:3001/cards/', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                name:name,
                type:type,
                desc:description,
                atk:atk,def:def,
                level:level,
                race:race,
                attribute:attribute,
                archetype:archetype,
                card_sets:cardSets,
                card_images:image,
                card_prices:cardPrices
            } )
        } );

        const content = await rawResponse.json();
        console.log(content);
    }

    return (
        <>
            <button onSubmit={handleSubmit} id={'card-liked'}>heart</button>
        </>
    )
}