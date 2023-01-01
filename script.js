// 1

console.log('You can ignore single and double quotes like this:  \\\'\\\' \\\" \\\" ');

// 2

let data = prompt('Please enter your data');
let name = prompt ('Enter your name', 'name');
alert(`Your name is: ${name}`);
let surname = prompt('Enter your surname','surname');
alert(`Your full name is: ${name} ${surname}`);
let age = prompt('How old are you?');
alert(`Your full name is: ${name} ${surname}, your age is: ${age}`);
let status = confirm('Are you admin?');
alert(`Your fullname is: ${name} ${surname}, your age is: ${age}, admin status: ${status}`);

// 3

console.log(Boolean(alert('5'))); // false. alert нічого не повертає, і тому при приведенні "нічого" до булевого типу отримуємо false.
console.log(true > false); // true. При приведенні до числа true повертає 1, false повертає 0. 1 > 0 - це вірно, тому true.
console.log(true > 5); // false. При приведенні до числа true повертає 1. 1 менше 5, тому вираз не вірний - false.
console.log(true < '5'); // true. При приведенні до числа true повертає 1, строка '5' повертає число 5. 1 < 5 - це вірно, тому true.
console.log(true > null); // true. При приведенні до числа true повертає 1, null повертає 0. 1 > 0 - це вірно, тому true.

