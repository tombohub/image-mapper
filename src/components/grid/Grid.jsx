import './Grid.css';
import { Row } from "./Row";
import { colsCountAtom, rowsCountAtom } from '../atoms'
import { useAtom } from 'jotai';

export function Grid() {
    const [colsCount, setColsCount] = useAtom(colsCountAtom)
    const [rowsCount, setRowsCount] = useAtom(rowsCountAtom)
    return (
        <>
            <div id="grid">
                {Array(parseInt(rowsCount)).fill().map((v, i) => <Row key={i} rowNumber={i}/>)}
            </div>
        </>
    )
}