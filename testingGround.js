
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

// const pally = 11

const isPalindrome = (x) => {
    let curr = x.toString().split('').reverse().join('')
    if(x === parseInt(curr)){
        return true
    }else {
        return false
    }
};

// console.log(isPalindrome(pally))


const isvaleed = '()[]{}'
//must return '(', ')', '{', '}', '[', ']'
//valid only if characters are in closed in correct order
const isValidParentheses = (s) => {
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || ')' || '{' || '}' || '[' || ']'){
            return true
        }else {
            return false
        }
    }
};

// console.log(isValidParentheses(isvaleed))


const nums = [4, 1, 2, 1 ,2]
//            f           l


const singleNumber = (nums) => {
  for(let i = 0; i < nums.length; i++){
      for(let j = i + 1; j < nums.length; j++){
          if(nums[i] === nums[j]){
              
          }
      }
  }
   
        //if there are two consecutive numbers, skip it

        //return false if no single
        
        //return single
};

singleNumber(nums)

var singleNumber = function(nums) {
	var obj = {};
    debugger
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] in obj) {
			delete obj[nums[i]];
		} else {
			obj[nums[i]] = 1;
		}
	}
	return Object.keys(obj)[0];
};

singleNumber([4, 1, 2, 1 ,2])