let a = [10, 54, 125, 1, 4879, 245, 114, 5010, 7, 55];
let b = [];

b.push(Math.max(...a));
b.push(Math.min(...a));

console.log(b);

let c = [];
let result = [];

for(let i = 0; i < 5; i++){
    let arr = +prompt('Ведите число');
    c.push(arr)
    
}
console.log(c)

function average(num) {
    let d = num.reduce((a, b) => (a+b));
    let e = num.length;
    result.push(d/e);
    console.log(result)
}
average(c);

let arr1 = [1, 54, 841, 39, 11, 5, 615];
let arr2 = [19, 83, 243, 39, 55, 68, 2908];
let arr3 = [];


for(let i = 0; i < arr1.length; i++){

    cache = arr1[i];
    for (var j = 0; j < arr2.length; ++j){
         if (cache == arr2[j]) {
            arr3.push('=');
            break;
        }else if (cache < arr2[j]) {
            arr3.push('<');
            break;
        }else if (cache > arr2[j]) {
            arr3.push('>');
            break;
        }
    }
    
}

console.log(arr3);

let four1 = [5, 9, 7, 12, 52, 245, 855, 1996, 3865, 6858];
let four2 = [];

for(let i = 0; i < four1.length; i++){
    if(four1[i]%2 == 0){
        four2.push(four1[i])
    }
}

console.log(four2);
