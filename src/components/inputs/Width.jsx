import { useAtom } from "jotai"
import { imageWidthAtom } from "../atoms"

/**
 *Input component for setting up the width of image
 */
export function Width() {
    const [imageWidth, setImageWidth] = useAtom(imageWidthAtom)
    return (
        <>
            Width of image in px:
            <input type="number"
                value={imageWidth}
                onChange={e=>setImageWidth(parseInt(e.target.value))}
            />
        </>
    )
}