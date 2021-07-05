//JS Digits
// Task 1 Calculate square using two points coordinates

function calculateSquare(x1, y1, x2, y2) {
    let sideX = Math.abs(x2 - x1);
    let sideY = Math.abs(y2 - y1);
    let square = sideX*sideY;
    return square;
}

//Task 2 Compare fractional part of a numberы a and b with precision n

function compareDigits(a,b,n) {
    let aNormalized = (a%1).toFixed(n)*(10**n);
    let bNormalized = (b%1).toFixed(n)*(10**n);
    console.log('Дробная часть a', aNormalized);
    console.log('Дробная часть b', bNormalized);
    console.log('Дробные части равны', a===b);
    console.log('Дробные части равны с точностью n', aNormalized === bNormalized);
    console.log('Первое число больше второго', aNormalized > bNormalized);
    console.log('Второе число больше первого',aNormalized < bNormalized);
}

//Task 3 Generate a random number in the specified interval 

function randomOdd(min, max) {
    return (min + Math.random() * (max - min)) | 1;
  }

  console.log(randomOdd(0, 100));
  console.log(randomOdd(2, 5));
  console.log(randomOdd(100, -5));
  console.log(randomOdd(-3, -10));


  //Task 4
  //Password validation

function validatePassword (pass) {
    let count = 0;
    count += /[a-z0-9_]$/.test(pass) ? 1 : 0;
    count += /[a-z0-9-]$/.test(pass) ? 1 : 0;    
    if ((count >= 1) && (pass.length>=4) ){
        console.log('Пароль надежный')
    }
    else { 
        console.log('Пароль недостаточно надежный')
    }
}