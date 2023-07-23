#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Write Your Function Here
int add(vector<int> nums)
{
    int result = 0;

    for (int i : nums)
        result += i;
    return result;
}

int main()
{
  vector<int> numbersone = { 10, 20, 30 };
  vector<int> numberstwo = { 5, 15, 25 };

  cout << add(numbersone) << "\n"; // 60
  cout << add(numberstwo) << "\n"; // 45

  return 0;
}