#include "main.h"

int firstnegative(int nums[], int size)
{
    int i = 0, maxNegative = 0;
    int Negative = 0;

    for (i = 0 ; i < size ; i++)
    {
        if (nums[i] < Negative)
        {
            Negative = nums[i];
            break;
        }
    }

    for (i = 0 ; i < size ; i++)
    {
        if (nums[i] > Negative && nums[i] < 0)
            maxNegative = nums[i];
    }

    return maxNegative;

    
}
int main() {
    
    int numbers[] = { -10, -20, 15, 100, 10, 5, -50, 0, -5, -10 }; // -5
    int numssize = size(numbers);
    cout << firstnegative(numbers, numssize) << "\n";
    return 0;
}