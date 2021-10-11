import { useState } from 'react'
import { Grid } from './grid/Grid'
import { Columns } from './inputs/Columns'
import { Rows } from './inputs/Rows'
import { Width } from './inputs/Width'


function Main() {
    /**
     * Number of rows in grid
     */
    const [rowsCount, setRowsCount] = useState(12)

    /**
     * Number of columns in grid
     */
    const [colsCount, setColsCount] = useState(8)

    /**
     * Image width in pixels. Used for calculation coordinates of areas.
     */
    const [imageWidth, setImageWidth] = useState(1200)
    
    /**
     * Set the number of rows on change of input value
     * @param {int} number number of rows
     */
    const handleRowCountChange = (number) => {
        setRowsCount(number)
    }

    /**
     * Set the number of columns on change of input value
     * @param {int} number number of columns
     */
    const handleColCountChange = (number) => {
        setColsCount(number)
    }
    return (
        <>
            
            <Width />
            <Columns
            onChange={e=>handleColCountChange(e)}
            />
            <Rows
            onChange={v=>handleRowCountChange(v)}
            />
            <div>
                <Grid rowsCount={rowsCount} colsCount={colsCount}/>

            </div>
        </>
    )
}

export default Main