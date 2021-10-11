import { useState } from 'react'
import { Grid } from './grid/Grid'
import { Columns } from './inputs/Columns'
import { Rows } from './inputs/Rows'
import { Width } from './inputs/Width'


function Main() {
       
    return (
        <>
            
            <Width />
            <Columns
            
            />
            <Rows
            
            />
            <div>
                <Grid/>

            </div>
        </>
    )
}

export default Main