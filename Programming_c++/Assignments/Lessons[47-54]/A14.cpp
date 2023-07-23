#include "main.h"
 
int main() {
    int num = 2;

    while (num < 520)
    {
        if (num == 2)
            {
                num = 1;
                cout << num << endl;
                continue;
            }
        cout << num << endl;
        num = num * 2 + 2;
 
    }
    
    return 0;
}