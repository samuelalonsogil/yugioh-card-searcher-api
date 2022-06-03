import {useEffect, useState} from "react";

export default function LikedCards() {
    const url = `http://localhost:3001/cards/`;
    const [completeArray, setCompleteArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(url);
            const json = await data.json();
            setCompleteArray(json.data);
        }
        fetchData().catch(console.error);
    }, []);
    return (<>
        <div id={'multiple-results'}>
            <div id={'multiple-cards'}>
                {completeArray.map((d, idx) => {
                    return (
                        <>
                            <img key={idx} className={'image-from-list'} src={d.image} alt={'image'}/>
                        </> )})}
            </div>
        </div>
    </>)
}
