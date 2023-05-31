#include "main.h"
 
int main() {
    short i = 0;
    int nums[] = {10, 20, 14, 28, 40, 80, 15, 30};
    short size = sizeof(nums) / sizeof(nums[0]);

    for (i = 0 ; i < size ; i++)
    {
        if(nums[i] * 2 == nums[i+1])
            cout << nums[i] << endl;
    }
    return 0;
}