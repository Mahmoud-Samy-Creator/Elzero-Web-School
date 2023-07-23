#include "main.h"

int main()
{
    int i;
    int nums[] = {100, 200, 300, 400, 500, 600};
    int numsize = sizeof(nums) / sizeof(nums[0]);

    for (i = 0 ; i < numsize ; i++)
    {
        if (i % 2 == 0)
            cout << nums[i] << "\n";
    }
    return 0;
}