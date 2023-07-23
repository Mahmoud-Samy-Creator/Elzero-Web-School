#include "main.h"
 
int main() {
    short i = 0, result = 30;

    cout << "Normal" << endl;
    cout << "========================\n";
    for(i = 10 ; i > 0 ; i--)
    {
        cout << result << endl;
        result -= 3;
    }

    i = 0;
    result = 30;

    cout << "Without evens" << endl;
    cout << "========================\n";

        for(i = 10 ; i > 0 ; i--)
    {
        if (result %2 != 0)
            cout << result << endl;
        result -= 3;
    }
    return 0;
}