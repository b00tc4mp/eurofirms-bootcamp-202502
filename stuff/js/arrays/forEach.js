var nums = [10, 20, 30]

// for (var i = 0; i < nums.length; i++) { // imperative
//     var num = nums[i]

//     console.log(num)
// }

// nums.forEach(num => console.log(num)) // declarative

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) { // imperative
        var element = array[i]

        callback(element)
    }
}

forEach(nums, num => console.log(num)) // declarative