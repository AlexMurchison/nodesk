const numbers = [];
let total = 0

for (counter = 0; counter < 1001; counter++) {
    numbers.push(counter);
    total += counter
    console.log(total);
}

if(total === 500500) {
    console.log (`Good job! 500500 is the expected result!`);
} else {
    console.log (`Take a look to see if something is wrong, ${total} is not what you should have gotten. :(`)
}



