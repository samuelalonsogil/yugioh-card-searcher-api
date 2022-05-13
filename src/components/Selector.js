import Select from "react-select";

export default function Selector(props) {
    return (
        <>
            <Select placeholder={props.placeholder} options={props.options} onChange={props.onChange}/>
        </>)
}