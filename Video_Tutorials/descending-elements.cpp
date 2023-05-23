#include "main.h"

int main()
{
    int i;
    int nums[] = {100, 200, 300, 400, 500, 600};
    int numsize = sizeof(nums) / sizeof(nums[0]);

    for (i = numsize - 1 ; i >= 0 ; i--)
    {
        cout << nums[i] << "\n";
    }
    return 0;
}