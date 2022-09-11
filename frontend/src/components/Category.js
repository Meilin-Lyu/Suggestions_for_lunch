import React, { useState } from "react";
import "../css/Category.css";
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

const Category = (props) => {
    const categoryName = ['Asian Food', 'Western Food', 'Indian Food'];
    const category = ['asian', 'western', 'indian'];
    const [value, setValue] = useState();
    const handleChange = val => {
        setValue(val);
        props.categoryChange(val);
    }
    return (
        <div className="Category">
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} defaultValue={['western', 'asian', 'indian']}>
                {categoryName.map((name, id) => (
                    <ToggleButton
                        key={id}
                        id={id}
                        variant="outline-success"
                        value={category[id]}
                        checked={true}>
                        {name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export default Category;