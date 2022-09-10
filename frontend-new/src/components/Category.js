import React, { useState } from "react";
import "../css/Category.css";
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

const Category = () => {
    const foodCategory = ['Chinese Food', 'Japanese Food', 'French Food', 'Canadian Food'];
    const [value, setValue] = useState();
    const handleChange = val => setValue(val);
    return (
        <div className="Category">
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                {foodCategory.map((tab, id) => (
                    <ToggleButton key={id} id={tab} variant="outline-success" value={id}>{tab}</ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export default Category;