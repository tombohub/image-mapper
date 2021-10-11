export function Columns(props) {
    return (
        <>
            Number of columns:
            <input type="number" name="cols" id="cols"
                defaultValue={8}
                onChange={e=>props.onChange(e.target.value)}
            />
        </>
    )
}