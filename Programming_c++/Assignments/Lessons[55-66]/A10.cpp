#include "main.h"

int minpositive(int nums[], int size)
{
    int i = 0;
    int minPositive = 0;

    for(i = 0 ; i < size ; i++)
    {
        if (nums[i] > 0)
        {
            minPositive = nums[i];
            break;
        }
    }

    for (i = 0 ; i < size ; i++)
    {
        if (nums[i] < minPositive && nums[i] > 0)
            minPositive = nums[i];
    }
    
    return minPositive;
}

int main(){
    int numbers[] = { -10, -20, 15, 100, 10, 5, -50, 0 }; // 5
    int numssize = size(numbers);
    cout << minpositive(numbers, numssize) << "\n";
    // Your code here
    return 0;
}