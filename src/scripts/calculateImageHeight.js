/**
 * Calculates how much the image height will be in pixels. Depends on rows count 
 * and square size
 * @param {int} squareSize square size in pixels, one side
 * @param {int} rowsCount number of rows in grid
 * @returns image height in pixels
 */
export function calculateImageHeight(squareSize, rowsCount) {
    return squareSize * rowsCount;
}