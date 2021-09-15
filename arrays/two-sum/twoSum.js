function findTwoSumIndices(nums, target){
        let hashObj = {}
        for(let i=0; i< nums.length; i++){
             if(hashObj[nums[i]]){
                 return [hashObj[nums[i]], i]
            }else{
                hashObj[target - nums[i]] = i
            }      
            }
    
}

let x= findTwoSumIndices([3,2,4], 6)
console.log(x)
