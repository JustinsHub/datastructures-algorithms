
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//brute force
//return index of two numbers that add up to target
const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
        return null
    }
  };


//find out about hashtags
  

// twoSum(num, 16)

