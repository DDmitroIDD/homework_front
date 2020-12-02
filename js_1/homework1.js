// first

// let go = true;
//
//
// while (go) {
//     let result = confirm('twist?');
//     if (result === true) go = false
//
// }

// second.1

// let mass = Array.from(Array(10).keys()).map((item, i, arr) => {
//    return i *= i * i;
//
// })
// console.log(mass)

//second.2

 let mass = [1,2,3,4,5,6,7,8,9,10].map((item, i, arr) => {
   return i *= i * i;

})
console.log(mass)



//third

// let n = prompt('Введите число');
// let sum = 0;
//
// for (let i = 1; i <= n; i += 3) {
//     sum += i
// }
// console.log(sum)

//fourth

// let a = '.#';
// let horizontal = +prompt('Длина горизонтали');
// let vertical = +prompt('Длина вертикали');
// let board = '';
// let line = '';
//
// for (let v = vertical; v > 0; v--) {
//     line = '';
//     for (let h = horizontal; h > 0; h--) {
//         line += a;
//
//     }
//     if (v % 2 === 0) {
//         line = line.split('').reverse().join('');
//
//     }
//     board += line + '\n';
// }
//
// console.log(board)
