#include "main.h"
 
int main()
{
    short i = 0;

    for (i = 0 ; i  < 11 ; i++)
        cout << i << " ";
    cout << "\n =============================== \n";

    i = 0;

    while (i < 11)
    {
        cout << i << " ";
        i++;
    }

    i = 0;
    cout << "\n =============================== \n";

    do
    {
        cout << i << " ";
        i++;
    } while (i < 11);
    
    i = 0;


    // Your code here
    return 0;
}