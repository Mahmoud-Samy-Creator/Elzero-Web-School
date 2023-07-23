#include "main.h"
 
int main() {
    int index = 10;
    int jump = 2;

    for(;;)
    {
        if (index == 2)
            break;

        cout << index << endl;
        index -= jump;
    }
    return 0;
}