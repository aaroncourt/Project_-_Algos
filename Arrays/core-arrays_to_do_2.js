// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverseArray(arr) {

    let length = arr.length

    for (i = 0; i < ((length-1)/2); i++){

        let temp = arr[i]
        arr[i] = arr[length-(1+i)]
        arr[length-(1+i)] = temp
    }
    return console.log( arr)
}

reverseArray([9,7,5,4,2,0])
reverseArray(['one', 2, 'three', 4, 'five'])

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy){
    var totalShift = 0;
    var length = arr.length;
    var newArr = []

    if (shiftBy === 0){
        return arr
    }

    for (i = 0; i < length; i++){
        console.log(`start of loop ${i}: ${newArr}`)
        totalShift = i + shiftBy;
        //if shift is positive
        if (shiftBy > 0){
            if (totalShift < length){
                newArr[totalShift] = arr[i]
            }
            else{
                while (totalShift >= length){
                    console.log(totalShift)
                    totalShift = totalShift - length
                    console.log(totalShift)
                }
                if (totalShift === 0){
                    newArr[0] = arr[i];
                }
                else if (totalShift < 0){
                    newArr[i+totalShift] = arr[i];
                }
                else {
                    newArr[totalShift] = arr[i]
                }
            }
        }
        //if shift is negative
        else if (shiftBy < 0){
            if (totalShift >= 0){
                newArr[totalShift] = arr[i]
            }
            else{
                while (totalShift < 0){
                    console.log(totalShift)
                    totalShift = totalShift + length
                    console.log(totalShift)
                }
                if (totalShift === 0){
                    newArr[0] = arr[i];
                }
                else {
                    newArr[totalShift] = arr[i];
                }
            }
        }
        else {
            return console.log('Please enter valid parameters')
        }

        console.log(`end of loop ${i}: ${newArr}`)
    }
    return console.log(`completed shift: ${newArr}`)
}

rotateArr([1,2,3], 1);
rotateArr([1,2,3], 2);
rotateArr([1,2,3], -1);
rotateArr([1,2,3], -2)

// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterArr (arr, min, max) {
    console.log('The function is running')
    var temp = null
    for (let i = arr.length - 1;  i >= 0; i--){
        console.log(`in index # ${i}`)
        if (arr[i] >= max || arr[i] <= min){
            console.log(`This number is NOT in range: ${arr[i]}`)
            for (x = i; x < arr.length - 1; x++){
                console.log(`before switch: ${arr}`)
                temp = arr[x]
                arr[x] = arr[x + 1]
                arr[x + 1] = temp
                console.log(`after switch: ${arr}`)
            }
            arr.length--
            console.log(`after decrement: ${arr}`)
        }
        else {
            console.log(`This number IS in range: ${arr[i]}`)
        }
    }
    return arr
}

filterArr([0,1,2,3,4,5], 1, 4);
filterArr([0,-3,-1,4,3,6,2], -3, 3)
filterArr([23,14,56,68,33,89,90], 33, 90)

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arr1, arr2){
    var newArr = []
    var index = 0
    for (i = 0; i < arr1.length; i++){
        newArr[i] = arr1[i]
        index++
    }
    for (i = 0; i <arr2.length; i++){
        newArr[index] = arr2[i]
        index++
    }
    return console.log(newArr);
}

arrConcat([1,2], [9,8])
arrConcat(['one', 2, -3], ['nine', null, -8])