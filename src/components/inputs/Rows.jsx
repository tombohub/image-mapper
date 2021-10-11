export function Rows(props) {

    return (
        <>
            Number of rows:
            <input type="number" name="rows" id="rows"
                onChange={e => props.onChange(e.target.value) }/>
        </>
        )
}