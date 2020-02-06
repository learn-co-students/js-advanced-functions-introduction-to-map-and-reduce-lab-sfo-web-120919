// Your code here
function myMap(arr, f) {
    const newArr = []
    for (let v of arr) {
        newArr.push(f(v))
    }
    return newArr
}

function mapToNegativize(arr) {
    return myMap(arr, (v) => v * -1 )
}

function mapToNoChange(arr) {
    return myMap(arr, (v) => v)
}

function mapToDouble(arr) {
    return myMap(arr, (v) => v * 2 )
}

function mapToSquare(arr) {
    return myMap(arr, (v) => v ** 2 )
}


function reduceToTotal(arr, start=0) {
     
     

     arr.forEach(element => start += element)
     return start
}

function reduceToAllTrue(arr) {
    
    
    for (let v of arr) {
        if (!!v === false) return false
    }

    return true
    
}

function reduceToAnyTrue(arr) {
    for (let v of arr) {
        if (!!v === true) return true
    }

    return false
    
}
