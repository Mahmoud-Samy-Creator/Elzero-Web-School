#include "main.h"

int main()
{
    //int nums[] = {10, 20, 30, 40, 20, 50};

    vector <int> nums = {10, 20, 30, 40, 20, 50};

    short m1, m2, m3;
    m1 = sizeof(nums) / sizeof(nums[0]);
    m2 = nums.size();

    for (m3 = 0 ; nums[m3] <= nums.back() && nums[m3] > 0 ; m3++);

    cout << m1 << endl;
    cout << m2 << endl;
    cout << m3 << endl;
    
    return 0;
}
