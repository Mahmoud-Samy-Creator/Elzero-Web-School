#include "main.h"
 
int thepower(int a, int b)
{
    int i = 0;
    int c = a;

    for (i = 1 ; i < b ; i++)
        c = c * a;

    cout << c;

    return c;
}

int main() {
    thepower(2, 5); // 32
      return 0;
}