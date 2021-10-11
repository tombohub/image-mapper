/**
 * Calculates the size of grid square. We only need one sid of the square.
 * @param {int} imageWidth image width in pixels
 * @param {int} colsCount number of columns
 * @returns size of the square's side in pixels
 */
export function calculateSquareSize(imageWidth, colsCount) {
    return imageWidth / colsCount;
}

