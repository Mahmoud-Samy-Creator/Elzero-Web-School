#include "main.h"
 
int main() {
    int i = 0;

    for (i = 100 ; i <= 1100 ;)
    {
        if (i == 100 || i == 1100)
        {
            cout << i << endl;
            i += 100;
        }
            
        
        else
        {
            cout << i << endl << i << endl;
            i += 100;
        }
    }
    return 0;
}