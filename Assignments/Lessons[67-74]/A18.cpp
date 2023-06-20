#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  vector<int> firstnumbers = { 10, 30, 50, 70 };
  vector<int> secondnumbers = { 20, 40, 60, 80 };
  vector<int> merged (firstnumbers.size() + secondnumbers.size());

  merge(firstnumbers.begin(), firstnumbers.end(),
  secondnumbers.begin(), secondnumbers.end(), merged.begin());

  sort(merged.begin(), merged.end());

  for(int i : merged)
    cout << i << '\n';

  return 0;
}