#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  vector<int> numbers = { 10, 20, 30, 40 };

  // Method One
  //numbers.erase(numbers.begin() + 3, numbers.end());

  // Method Two
  //numbers.pop_back();

  // Method Three
  //numbers.resize(numbers.size() - 1);

  //Method Four
  numbers.assign(numbers.begin(), numbers.end() - 1);

  // Do Not Edit
  for (int i : numbers)
  {
    cout << i << "\n";
  }
  return 0;
}

// Needed Output
//10
//20
//30