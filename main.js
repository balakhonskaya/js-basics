//JS Digits
// Task 1 Calculate square using two points coordinates

function calculateSquare(x1, y1, x2, y2) {
    let sideX = Math.abs(x2 - x1);
    let sideY = Math.abs(y2 - y1);
    let square = sideX*sideY;
    return square;
}

//Task 2 Compare a and b with precision n

function compareDigits(a,b,n) {
    let aNormalized = Math.round(a * Math.pow(10, n));
    let bNormalized = Math.round(b * Math.pow(10, n));
    console.log('Число a', aNormalized);
    console.log('Число b', bNormalized);
    console.log('Исходные числа равны', a===b);
    console.log('Числа равны с точностью n', aNormalized === bNormalized);
    console.log('Первое число больше второго', aNormalized > bNormalized);
    console.log('Второе число больше первого',aNormalized < bNormalized);
}