#include "main.h"
 
int main() {
    int i = 0, result = 10;

    for (i = 0 ; i < 5; i++)
    {
        cout << result << endl;
        result *= 10;
    }
    return 0;
}