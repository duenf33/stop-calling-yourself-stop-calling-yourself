function questionMark(str) {
    return str + '???';
}
let result1 = questionMark('hello');
let result2 = questionMark('what even');
result1;
result2;

function spaceMiddle(str, str1) {
    return str + ' ' + str1;
}
let result3 = spaceMiddle('oh', 'hi');
let result4 = spaceMiddle('well', 'hello back')
result3;
result4;

function subtractNumbers(x, y, z) {
    return x - y - z;
}
let result5 = subtractNumbers(10, 1, 2);
let result6 = subtractNumbers(8, 3, 5)
let result7 = subtractNumbers(100, 80, 25)
result5;
result6;
result7;

function newOrder(x, y, z) {
    num = (x +'-'+ y +'-'+ z).split('').reverse().join('');
    num1 = parseInt(num);
    console.log(num)
    console.log(num1)
    return num1;
}
    let result8 = newOrder('10', '1', '2');
    let result9 = newOrder('2', '1', '10');
    result8;
    result9;
    
function tripleString(str) {
    return str + str + str;
}
    let result10 = tripleString('codeimmersives');
    let result11 = tripleString('is the best')
    result10;
    result11;

    function squareRoot(x) {
        return Math.sqrt(x);
    }
    let result12 = squareRoot(16);
    let result13 = squareRoot(4);
    let result14 = squareRoot(9);
    result12;
    result13;
    result14;
