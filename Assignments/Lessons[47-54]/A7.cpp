#include "main.h"
 
int main() {
    short i = 0, result = 2;

    cout << "Using for loop" << endl;
    cout << "================================\n";

    for (i = 0 ; i < 7 ; i++)
    {
        cout << result << endl;
        result *= 2;
    }

    cout << endl;

    i = 0;
    result = 2;

    cout << "Using while loop" << endl;
    cout << "================================\n";
    
    while (i < 7)
    {
        cout << result << endl;
        result *= 2;
        i++;
    }
    return 0;
}