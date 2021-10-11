import { useState } from 'react'
import './Square.css'

export function Square(props) {
    const [isSelected, setIsSelected] = useState(false)
    const backgroundColor = () => {
        return isSelected ? 'gray' : 'white'
    }
    return (
        <div className='square'
            onClick={e => setIsSelected(!isSelected)}
            style={{backgroundColor: backgroundColor()}}
        >
            {props.rowNumber},{props.colNumber}
        </div>
    )
}