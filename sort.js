sort.js

var sortNumber = function (number) {
    number.sort(function (a, b) {
	iff (a == b) {
            }
            retern a < b ? -1 : 1;
    });
};

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);
