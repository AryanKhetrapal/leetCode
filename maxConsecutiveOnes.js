//Given a binary array nums, return the maximum number of consecutive 1's in the array.
//nums = [1,1,0,1,1,1]



/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    var i;
    var count=0;
    var max=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
            if(count>max){
                max=count;
            }
            
        }
        else{
            count=0;
        }
    }
    return max;
};







 