#include "main.h"
 
int max(int nums[], int size)
{
    int i = 0;
    int max = 0;

    for (i = 0 ; i < size ; i++)
    {
        if (nums[i] > max)
            max = nums[i];
        
        else
            continue;
    }

    return max;
}

int main() {
    
    int nums[] = {1, 3, 5, 6, 4, -7, 10, 8, 6};
    
    cout << max(nums, size(nums));

    return 0;
}