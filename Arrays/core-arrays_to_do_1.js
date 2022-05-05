// Arrays To Do 1

// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function addToFront(arr, val) {
    var newArr = [val]
    for (var i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i]
    }
    return console.log(newArr)
}

addToFront([3, 3, 7], 1);
addToFront(['a', 'b', 'c'], -1 )
addToFront([-1, 2.34, null], 'yay') 

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function removeFromFront(arr) {
    var val = arr[0]
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            continue
        }
        else {
            newArr[i - 1] = arr[i]
        };
    };
    console.log('This is the new array: ' + newArr);
    return console.log(val);
};

removeFromFront([1, 2, 3]);
removeFromFront([undefined, 'two', 3])
removeFromFront([null, 2, '3'])
removeFromFront(['one', 2, 3.01])

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, ind, val){
    var newArr = [];
    for (var i = 0; i < (arr.length + 1); i++){
        if (i < ind){
            newArr[i] = arr[i]
        }
        else if (i === ind){
            newArr[i] = val
        }
        else{
            newArr[i] = arr[i-1]
        }
    }
    return console.log(newArr)
};

insertAt([1, 2, 3], 1, 7)
insertAt(['one', 2, 3.01], 0, undefined)
insertAt([-1, '2', 3], 3, 'coffee')


// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, ind){
    var val = arr[ind];
    var newArr = []
    for (var i = 0 - 1; i < arr.length ; i++ ){
        if (i < ind){
            newArr[i] = arr[i]
        }
        else if (i === ind){
            continue
        }
        else{
            newArr[i-1] = arr[i]
        }
    }
    console.log('This is the new array: ' + newArr);
    return console.log(val)
}

removeAt([1, 2, 3], 2)
removeAt([-1, '2', 3], 0)
removeAt(['one', 2, 3.01], 0)


// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr){
    for (var i = 0; i < arr.length - 1; i += 2){
        var x = arr[(i + 1)];
        var y = arr[i];
        arr[i] = x;
        arr[i + 1] = y
    }
    return console.log(arr)
}

swapPairs([1, 2, 3, 4, 5])
swapPairs(['one', 2, 'three', 4])
swapPairs([1, , 2, 3, 4,])


// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops. 

function removeDuplicates(arr){
    var newArr = [];
    var count = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            count++
        }
        else {
            newArr[i - count] = arr[i]
        }
    };
    return console.log(newArr)
}

removeDuplicates([0,1,2,2,3])


