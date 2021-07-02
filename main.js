//JS Digits
// Task 1 

function calculateSquare(x1, y1, x2, y2) {
    let sideX = Math.abs(x2 - x1);
    let sideY = Math.abs(y2 - y1);
    let square = sideX*sideY;
    return square;
}