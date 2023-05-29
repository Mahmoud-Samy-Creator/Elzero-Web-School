#include "main.h"
 
int main() {
    int vals[] = {100, 300, 600, 200, 100};

    int size = sizeof(vals) / sizeof(vals[0]);
    int end = size - 1;
    int start = 0, i = 0;
    int end_itt = size / 2;


    for (i = 0 ; i < 2 ; i++)
    {
        if(vals[start] == vals[end]);
        else
        {
            cout << "Array Is not Palindrome\n";
            break;
        }

        start++;
        end--;
    }

    if (i == 2)
        cout << "Array Is Palindrome";


    return 0;
}