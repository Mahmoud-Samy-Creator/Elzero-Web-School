#include "main.h"
 
int minimum(int nums[], int size)
{
    int i = 0;
    int min = 0;

    for (i = 0 ; i < size ; i++)
    {
        if (nums[i] < min)
            min = nums[i];
        
        else
            continue;
    }

    return min;
}

int main() {
    
    int nums[] = {1, 3, 5, 6, 4, -7, 10, 8, 6};
    
    cout << minimum(nums, size(nums));

    return 0;
}