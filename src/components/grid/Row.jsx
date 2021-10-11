import { Square } from "./Square";
import './Row.css'
import { useAtom } from "jotai";
import { colsCountAtom } from "../atoms";

export function Row(props) {
    const [colsCount] = useAtom(colsCountAtom)
    return (
        <div className='row'>
            {Array(colsCount).fill().map((v, i) => <Square key={i} rowNumber={props.rowNumber} colNumber={i}/>)}
        </div>
        
    )
}