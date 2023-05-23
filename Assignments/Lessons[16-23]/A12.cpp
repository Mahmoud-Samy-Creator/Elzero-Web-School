#include "main.h"

int main()
{
// Do Not Edit Here
short a = 1000; //
int b = 10000;
long double c = 5.560000505012;

// Change ??? To Something Else To Get The Output
    cout << sizeof(a) << endl;
    cout << sizeof(b) << endl;
    cout << sizeof(c) << endl;

    cout << endl;

    cout << sizeof(c) - sizeof(b) << "\n"; // 12
    cout << sizeof(b) + sizeof(c) << "\n"; // 20
    cout << sizeof(a) * sizeof(c) << "\n"; // 32
    cout << a * 5 << "\n"; // 5000
    cout << char((sizeof(b) + sizeof(c)) * 4) << "\n"; // P
}
