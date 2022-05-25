import {useEffect, useState} from "react";

export default function () {
    const url = `http://localhost:3001/cards/`;
    const [_id, setId] = useState('');
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

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(url);
            const json = await data.json();
            console.log(json.data);
            console.log(json.data[0]._id);
            setCompleteArray(json.data);


        }
        fetchData().catch(console.error);

    }, []);


    const handleSubmitDelete = async (e) => {

        try {
            const rawResponse = await fetch(`http://localhost:3001/cards/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            const content = await rawResponse.json();
            console.log(content);

        } catch (err) {
            alert('fail deleting');
        }
    }

    return (<>

        <div id={'multiple-results'}>
            <div id={'multiple-cards'}>
                {completeArray.map((d, idx) => {
                    return (<>
                            <img key={idx} className={'image-from-list'} src={d.image} alt={'image'}/>
                            <button className={'links'} type={'submit'} onClick={handleSubmitDelete}>delete</button>

                        </>


                    )
                })}

            </div>
        </div>

    </>)
}
