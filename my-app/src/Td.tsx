import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";
export default function Td() {
    
    const [value, setValue] = useState(-1);

    const [nameClass, setNameClass] = useState("red-td");
    useEffect(() => {},[value])
    const changeClass = (number: number) => {
        
        console.log(value)
        if (number == -1) {
            setNameClass("red-td");
        }
        else if (number == 0) {
            setNameClass("blue-td");
        }
        else if (number == 1) {
            setNameClass("green-td");
        }
    }
    const onChange = () => {
        if (value == -1) {
            setValue(0)
            changeClass(0)
        }
        else if (value == 0) {
            setValue(1)
            changeClass(1)
        }
        else if (value == 1) {
            setValue(-1)
            changeClass(-1)
        }
        
    }
    return (
        <td onClick={onChange} className={nameClass}>{value}</td>
    );



}