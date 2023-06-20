#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  vector<int> nums = { 1, 2, 3, 4, 5, 6, 7, 8 };

  // Your Code Here
  swap(nums.at(0), nums.at(nums.size() - 4));
  swap(nums.at(1), nums.at(nums.size() - 3));
  swap(nums.at(2), nums.at(nums.size() - 2));
  swap(nums.at(3), nums.at(nums.size() - 1));
    
  for (int i : nums)
  {
    cout << i << "\n";
  }
  return 0;
}