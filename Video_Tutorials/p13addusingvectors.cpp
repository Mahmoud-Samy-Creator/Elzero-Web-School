#include "main.h"

int calc(vector <int> nums)
{
    short result = 0, i = 0;

    for (i = 0 ; i < nums.size() ; i++)
        result += nums.at(i);

    return result;
}

int main(void)
{
    vector <int> nums {100, 200, 300, 400};

    cout << calc(nums) << endl;

    nums.push_back(200);

    cout << calc(nums) << endl;
}