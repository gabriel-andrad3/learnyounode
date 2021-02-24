//console.log(process.argv)

let sum = 0;
process.argv.forEach((val, index) => {
    if (index >= 2)
        sum += Number(val);
});
console.log(sum);