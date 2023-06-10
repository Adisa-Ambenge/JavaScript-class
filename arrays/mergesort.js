// function divideArray(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     let middle = Math.floor(arr.length / 2);
//     let left = arr.slice(0,middle);
//     let right = arr.slice(middle);
//     console.log({left});
//     console.log({right});
//     return sortedArray(divideArray(left), divideArray(right))
// }
// function sortedArray(left,right){
//     let emptyArray = [];
//     while(left.length && right.length){
//         if(right[0]<left[0]){
//             emptyArray.push(right.shift());
//         }
//         else{
//             emptyArray.push(left.shift());
//         }
//     }
//     console.log({emptyArray});
//     return [...emptyArray,...left,...right]
// }

// let arr = [3,10,2,26,15,11,4];
// console.log(divideArray(arr));


//sort the following array [45,12,6,89,2,5]

function mergeSort(arr1){
    if(arr1.length<=1){
        return arr1
    }
    let middle1 = Math.floor(arr1.length/2);
    let left1 = arr1.slice(0,middle1);
    let right1 = arr1.slice(middle1);
    return mergeSorted(mergeSort(left1),mergeSort(right1));
}
function mergeSorted(left1,right1){
    let newArr1 = [];
    while(left1.length && right1.length){
        if (left1[0]<right1[0]){
            newArr1.push(left1.shift());
        }
        else {
            newArr1.push(right1.shift());
        }
    }
    console.log({newArr1});
    return[...newArr1,...left1,...right1]
}


function binary(arr1,target){
    let left1 = 0;
    let right1 = arr1.length-1;
    while(left1<=right1){
        let middle1 = Math.floor(left1+right1/2);
        if(arr1[middle1]===target){
            return middle1
        }
        else if (arr1[middle1]>target){
            right1= middle1-1
        }
        else{
            left1 = middle1 + 1
        }

    }
    return null
}
let arr1 = [45,12,6,89,2,5];
console.log(mergeSort(arr1));
let target = 6;
console.log(binary(arr1,target))
