function fibonacci(total, firstValue, secondValue) {

    if (total <= 5000) {
        total = firstValue + secondValue;
        firstValue = secondValue;
        secondValue = total;
        console.log(total);
        fibonacci(total, firstValue, secondValue);
    }
}

function fibonacciTest() {
    
}

fibonacci(0, -1, 1);