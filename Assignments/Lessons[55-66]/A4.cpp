#include <iostream>
using namespace std;

// Your Function Here
int calculation(int a, int b, int c)
{
    return a+b+c;
}

int calculation(int a, int b)
{
    return a+b + (300-(a+b));
}

int calculation(int a)
{
    return a + (300-a);
}

int main()
{
  cout << calculation(50, 100, 150) << "\n"; // 300
  cout << calculation(100, 50) << "\n"; // 300
  cout << calculation(100) << "\n"; // 300
  return 0;
}