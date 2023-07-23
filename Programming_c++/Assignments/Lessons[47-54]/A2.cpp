#include "main.h"
 
int main() {
    short i = 2;

    for (;;)
    {
        cout << i << endl;
        i++;
        
        if (i > 8)
            break;
    }
    // Your code here
    return 0;
}