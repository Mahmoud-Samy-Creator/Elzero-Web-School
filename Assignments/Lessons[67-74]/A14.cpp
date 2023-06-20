#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int j = 0, k = 0;
  vector<int> nums = { 5, 4, 3, 2, 1 };

  // Method One
  //sort(nums.begin(), nums.end());

  // Method Two
  //reverse(nums.begin(), nums.end());

  // Method Three -> Use Swap + Loop For Challenge
  while (k < nums.size() - 1)
  {
    for (j = 0 ; j < nums.size() - 1; j++)
    if(nums.at(j) > nums.at(j+1))
      swap(nums.at(j), nums.at(j + 1));
    k++;
  }
  for (int i : nums)
  {
    cout << i << "\n";
  }

  return 0;
}

// Needed Output
//1
//2
//3
//4
//5