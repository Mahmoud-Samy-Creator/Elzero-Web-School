#include "main.h"
 
int main() {
    int i = 0, result = 10;

    cout << "Using for loop" << endl;
    cout << "================================\n";
    
    for (i = 0 ; i < 5; i++)
    {
        cout << result << endl;
        result *= 10;
    }

    cout << endl;

    i = 0;
    result = 10;

    cout << "Using while loop" << endl;
    cout << "================================\n";

    while (i < 5)
    {
        cout << result << endl;
        result *= 10;
        i++;
    }
    return 0;
}