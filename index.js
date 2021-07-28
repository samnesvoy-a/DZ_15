let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
        let message = this.message;
        setTimeout(function () {
            console.log(message);

        }, 3000);
    }
}
let teaPlease = {
    message: 'Wanna some tea instead of coffee?',
}
let someTea = coffeeMachine.start.bind(teaPlease);
someTea();

//2
function concatStr(arg1, divider, arg2) {
    return (arg1 + divider + arg2);
}

let checkConcat = concatStr('Hello', ' ', 'Matt');
console.log(checkConcat);

let hello = concatStr.bind(null, 'Hello', ' ');

let finalResult = hello('John')
console.log(finalResult);

//3
showNumbers(5, 10, 500);
function showNumbers(min, max, interval) {
    let timeout = setTimeout(function inter () {
        if (min <= max) {
            console.log(min);
            min++
        }
        timeout = setTimeout(inter, interval);
    }, interval);
}

//4
// function addBase(base) {
//     return function (num) {
//         return base + num;
//     };
// }
// let addOne = addBase(1);
// alert(addOne(5) + addOne(3));
// результат будет 10 так как в addBase мы присвоили один, и когда у нас просиходит
// сложение то к числу 5 у нас добавляется один.










