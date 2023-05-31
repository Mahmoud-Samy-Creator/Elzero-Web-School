#include "main.h"
 
int main() {
for (int i = 0; i <= 1000; i += 100) // Do Not Edit This Line
    {
        if (i == 0)
            i += 100;
        
        cout << i << endl;

        if (i == 900)
            break;
    }
    return 0;
}