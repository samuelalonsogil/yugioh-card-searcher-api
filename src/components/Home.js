import {useState} from "react";
import sadyugi from './raw/Yu-Gi-Oh-Sad-2.jpg';

export default function Home() {

    const [name, setName] = useState('');
    const [found, setFound] = useState(false);
    const [image, setImage] = useState('');
    const [type, setType] = useState('');

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

            if (cardName === null) {
                setName('')
                setFound(false);
                setImage('');
                setType('')
            } else {
                setName(cardName);
                setType(cardType);
                setImage(cardImage);
                setFound(true);
            }

        } catch (err) {
            setImage(sadyugi);
            console.log(err);
            setFound(false);
        }

        const rawResponse = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, cardImage: image})
        });

        const content = await rawResponse.json();
        console.log(content);

    }

    let handleChange = e => {
        const {name, value} = e.target;
        name === 'name' ? setName(value) : alert('error');
    }

    return (
        <>
            <div id={'main-container'}>

            </div>
        </>
    )

}