import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../hooks/useToggle.js"

export default function Star({ onChange }) {
    const [on, toggle] = useToggle(
        {
            initialValue: false,
            onToggle: onChange
        }
    )

    console.log(on, toggle)
    return (
        <>
            {
                on ?
                    <BsStarFill onClick={toggle} className="star filled" /> :
                    <BsStar onClick={toggle} className="star" />
            }
        </>
    )
}