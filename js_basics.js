//map
/*
const number = [1,2,3,4,5];
const squares = number.map(num=> num *0);
console.log(squares);

//filter
const n = [2,1,6,5];
const evens = n.filter(num=>num%2===0);
console.log(evens);

//reduce
const r = [1,2,3,4,5,6];
const sum = r.reduce((total,num) => total*num,1);
console.log(sum);

function fetchData(callback)
{
    setTimeout(() => {
        callback("Swetha");
    },1000)
}
fetchData(data=>console.log(data));

function processArray (arr,callback)
{
    const result = arr.map(callback);
    return result;
}

const num = [1,2,3,4,5];
const sq = processArray(num,num=>num*num);
console.log(sq);
 */

const myNumbers = [4,1,-20,-7,5,9,-6];
const posNum = removeNeg(myNumbers,(x)=>x>=0);

document.getElementById("demo").innerHTML = posNum;

function removeNeg(numb,callback)
{
    const myArray = [];
    for(const x of numb)
        {
            if(callback(x))
                {
                    myArray.push(x)
                }
        }
        return myArray;
}