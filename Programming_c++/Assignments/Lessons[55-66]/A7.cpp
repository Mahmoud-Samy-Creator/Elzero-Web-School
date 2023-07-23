#include "main.h"

int beforeresult (int a, int b)
{
    int i = 0;
    int j = a;

    for (i = b ; i > 0 ; i--)
    {
        j--;
        a += j;
    }

    return a;
}
int main() {
    cout << beforeresult(10, 5) << "\n"; // 10 + 9 + 8 + 7 + 6 + 5 = 45
    return 0;
}