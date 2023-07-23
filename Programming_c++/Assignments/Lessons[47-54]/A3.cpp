#include "main.h"
 
int main() {
    short a, b;
    
    cin >> a >> b;

    if (a < b)
    {
        short i = 0;

        for (i = a + 1 ; i < b ; i++)
            if (i % 2 != 0)
                cout << i << endl;
    }

    else
    {
        short i = 0;

        for (i = b + 1 ; i < a ; i++)
            if (i % 2 != 0)
                cout << i << endl;
    }
    return 0;
}