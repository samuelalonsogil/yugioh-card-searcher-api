import {useEffect, useState} from "react";


export default function Home() {

    const [name, setName] = useState('');
    const [found, setFound] = useState(false);
    const [image, setImage] = useState('');

    let handleSubmit = async e => {
        e.preventDefault();

        try {
            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`;
            const req = await fetch(url);
            const data = await req.json();

            console.log(data.data[0].name);

            let cardName = data.data[0].name;
            let cardImage = data.data[0].card_images[0].image_url;

            if (cardName === null){
                setName('')
                setFound(false);
                setImage('');
            }else{
                setName(cardName);
                setImage(cardImage);
                setFound(true);
            }
            //cardName === null ? setName('') : setName(cardName) && setFound(true);

        } catch (err) {
            alert('error ' + err);
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
            <div id={'main-container-searcher'}>

                <div>
                    <h3>Insert name card</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Insert card to search <input type={'text'} value={name} name={'name'}
                                                         onChange={handleChange}/>
                        </label>
                        <input type={'submit'} name={'button-search'} value={'search card'}/>
                    </form>
                </div>

                <br/>

                <div id={'container-results'}>
                    {found && <span>{name}</span>}
                    {found && <img src={image}/>}

                </div>

            </div>
        </>
    )

}