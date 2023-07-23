#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  vector<int> numbers = { 10, 20, 30, 40, 50, 60, 70, 80 };
  vector<int>::iterator it = numbers.begin();

  // Write Method One
  //numbers.front() = 50;

  // Write Method Two
  //numbers.at(0) = 50;

  // Write Method Three
  advance(it, 4);

  cout << *it << "\n"; // 50
  return 0;
}