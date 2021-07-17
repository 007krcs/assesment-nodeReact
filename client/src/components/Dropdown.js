import React,{useState} from "react";
import './Dropdown.css';

const CustomSelect = (props) => {
    const [data] = useState(props.data);
    const [selectedData, updateSelectedData] = useState({});
    function handleChange(event) {
        updateSelectedData(Object.assign(selectedData,{[event.target.name]: event.target.value} ));
        props.onSelectChange(selectedData);
    }
    let options = data.map(data => (
        <option key={data.id.toString()} value={data.id}>
            {data.value}
        </option>
    ));
    return (
        <select
            name={props.name}
            className="select-container"
            onChange={handleChange}
        >
            <option>Select Item</option>
            {options}
        </select>
    );
}
export default CustomSelect;
