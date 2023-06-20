#include "main.h"
int main(void)
{
    vector<int> numbers = { 10, 20, 30, 40, 50, 60, 70, 80 };
    vector<int> :: iterator fir = numbers.begin();
    vector<int> :: iterator last = numbers.end() - 1;
  // Write Your Code Here

  // Do Not Edit Below
    cout << *fir << "\n"; // 10
    cout << *last << "\n"; // 80
}