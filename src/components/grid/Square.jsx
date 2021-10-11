import { useState } from 'react'
import './Square.css'

export function Square() {
    const [isSelected, setIsSelected] = useState(false)

    const backgroundColors = () => {
        return isSelected ? 'gray' : 'white'
    }
    return (
        <div className='square'
            onClick={e => setIsSelected(!isSelected)}
            style={{backgroundColor: backgroundColors()}}
        >
            
        </div>
    )
}