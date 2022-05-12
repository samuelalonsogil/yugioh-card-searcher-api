import Select from "react-select";

export default function Selector(props){
    return (
        <>
            <Select placeholder={'select type...'} options={props.options} onChange={props.onChange} />

        </> )
}