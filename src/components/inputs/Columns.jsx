import { useAtom } from 'jotai'
import { colsCountAtom } from '../atoms'

export function Columns() {
    const [colsCount, setColsCount] = useAtom(colsCountAtom)
    return (
        <>
            Number of columns:
            <input type="number" name="cols" id="cols"
                defaultValue={8}
                onChange={e=>setColsCount(parseInt(e.target.value))}
            />
        </>
    )
}