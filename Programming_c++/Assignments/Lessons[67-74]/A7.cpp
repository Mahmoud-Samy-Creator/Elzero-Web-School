#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  vector<int> numbers = { 10, 20, 10, 40, 50 };
  vector<int>::iterator iter = numbers.begin();
  int i = 0;
  
  for (;;)
  {
    if (i == numbers.size())
      break;

    cout << *(iter + i) << ' ';
    i++;
  }
  
  

  return 0;
}