import { Square } from "./Square";
import './Row.css'

export function Row(props) {
    return (
        <div className='row'>
            {Array(parseInt(props.colsCount)).fill().map((v, i) => <Square key={i}/>)}
        </div>
        
    )
}