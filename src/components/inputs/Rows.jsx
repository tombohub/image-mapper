import { useAtom } from 'jotai'
import { rowsCountAtom } from '../atoms'

export function Rows() {
    const [rowsCount, setRowsCount] = useAtom(rowsCountAtom)

    return (
        <>
            Number of rows:
            <input type="number" name="rows" id="rows"
                value={rowsCount}
                onChange={e => setRowsCount(parseInt(e.target.value)) }/>
        </>
        )
}