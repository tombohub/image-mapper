import './Grid.css';
import { Row } from "./Row";

export function Grid(props) {
    return (
        <>
            <div id="grid">
                {Array(parseInt(props.rowsCount)).fill().map((v, i) => <Row colsCount={props.colsCount} key={i}/>)}
            </div>
        </>
    )
}