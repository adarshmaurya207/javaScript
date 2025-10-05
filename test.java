class Solution {
    boolean checkleft = false;
    boolean checkright = false;
    long leftsum = 0;
    long rightsum = 0;

    public long checkValidation(int pointer,int[] nums){
      
        
       
        if(checkleft){
            if(nums[pointer]>nums[pointer-1]){
                leftsum+=nums[pointer];
            }else{
                checkleft=false;
                return -1;
                };
        }else{
             leftsum=0;
        for(int i=pointer;i>=0;i--){
            if(i==0){
                leftsum+=nums[i];
                checkleft=true;
               continue;
            }
            if(nums[i]>nums[i-1]){ 
             leftsum+=nums[i]; 
            }else return -1;
        }
        }

         if(checkright&&pointer<nums.length-3){
            if(nums[pointer+1]>nums[pointer+2]){
                rightsum-=nums[pointer+1];
            }else{
                checkright=false;
                return -1;
                };
        }else{
             rightsum=0;
        for(int i=pointer+1;i<nums.length;i++){
            if(i==nums.length-1){
                rightsum+=nums[i];
                checkright=true;
                continue;
            }
            if(nums[i]>nums[i+1]){
                rightsum+=nums[i];
            }else return -1;
        }
        }
        
        checkleft=true;
        checkright=true;
        return Math.abs(leftsum-rightsum);
        
    }

    public long splitArray(int[] nums) {
     
        long min = Integer.MAX_VALUE;
        for (int i = 0; i < nums.length - 1; i++) {
            long temp = checkValidation(i, nums);
            if (temp != -1) {
                min = Math.min(min, temp);
            }
        }
        if (min == Integer.MAX_VALUE)
            return -1;

        return min;
    }
}