#include "main.h"

int main()
{
// Example 1
//int check = 25, i = 0, result = 0;
//int nums[]{40, 20, 30, 70, 100};

int check = 25, i = 0;
int nums[]{20, 35, 30, 70, 100};

int before_last = nums[sizeof(nums) / sizeof(nums[0]) - 2];


for ( i = 0 ; i < 3 ; i++)
{
    if (nums[i] > check)
    {
        cout << '{' << nums[i] << '}' << '+' <<'{' << before_last << '}' <<  '=' << nums[i] + before_last << endl;
    }
}

/*

// Ouput
//"{40} + {70} = 110"

// Example 2
int check = 25;
int nums[]{20, 35, 30, 70, 100};

// Ouput
//"{35} + {70} = 105"

// Example 2
int check = 25;
int nums[]{20, 25, 30, 70, 100};

// Ouput
//"{30} + {70} = 100"
*/

return 0;
}