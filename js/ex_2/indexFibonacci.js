let sequence1 = -1;
let sequence2 = 1;
let result = 0;

while (result < 20000) {
    console.log(result);
    result = sequence1 + sequence2;
    sequence1 = sequence2;
    sequence2 = result;
}