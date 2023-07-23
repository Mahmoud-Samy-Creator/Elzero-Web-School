#include "main.h"
 
int main() {
    short term = 4, result = 2, i = 0;

    cout << "Using for loop" << endl;
    cout << "================================\n";

    for (i = 0 ; i < 6; i++)
    {
        cout << result << endl;

        result += term;
        term *= 2;
    }

    term = 4, result = 2, i = 0;

    cout << "Using while loop" << endl;
    cout << "================================\n";

    while (i < 6)
    {
    cout << result << endl;

    result += term;
    term *= 2;
    i++;
    }
    return 0;
}