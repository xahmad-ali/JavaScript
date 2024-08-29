let arr=[1,2,3,5,8]


// forEach does not return new array 
// here first prameter is the value of array 
// second parmeter is the index of array
arr.forEach((value,index)=>{
     arr[index]=(value*2)
})
console.log(arr)
/*arr.forEach((val)=>{
    console.log(val)
}) */

arr=[1,2,3,5,8]

// map returns new array
//A return statment must be used wihle using map
let mapArray=arr.map((value)=>{
    return value*3
})
console.log(mapArray)


//filter Also  returns new array 
//used when deleting a specific value
let filterAray=arr.filter((value)=>{
    if(value >= 2){return true}
})
console.log(filterAray)

//find also returns value
let findArray = arr.find((value)=>{
    if(value == 5){return value+"number is present"} 
})
console.log(findArray)

//indexOf returns index of the value 
// if value is not present it returns -1
console.log(arr.indexOf(5))

