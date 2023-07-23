#include "main.h"

int sumall (int nums[], int size, int noneed)
{
    int i = 0;
    int sum  = 0;

    for (i = 0 ; i < size ; i++)
    {
        if (nums[i] != noneed)
            sum += nums[i];
        
    }
    
    return sum;
}
int main()
{
    int numbers[] = { 13, 20, 3, 30, 5, 7, 40, 13 };
     // 20 + 3 + 30 + 5 + 7 + 40 = 105
    int numssize = size(numbers);
    int noneed = 13;
    cout << sumall(numbers, numssize, noneed) << "\n";
    // Your code here
    return 0;
}