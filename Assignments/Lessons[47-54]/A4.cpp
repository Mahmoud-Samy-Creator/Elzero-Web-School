#include "main.h"
 
int main() {
    short i = 0;
    short sum = 0;

    cout << "Using for loop" << endl;
    cout << "================================\n";
    for (i = 0 ; i < 7 ; i++)
    {
        cout << sum << endl;
        
        sum += 2;

        if (sum == 8)
        {
            cout << sum << endl;
            sum += 4;
        }
            
    }

    cout << endl;
    
    i = 0;
    sum = 0;

    cout << "Using while loop" << endl;
    cout << "================================\n";

    while (i < 7)
    {
        cout << sum << endl;
        
        sum += 2;

        if (sum == 8)
        {
            cout << sum << endl;
            sum += 4;
        }

        i++;
    }
    // Your code here
    return 0;
}