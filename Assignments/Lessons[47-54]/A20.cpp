#include "main.h"
 
int main()
{
    short i = 0;
    string names[] = {"Osama", "Ahmed", "Mahmoud", "Hagar", "Eman", "Salwa"};

    for (i = 0 ; i < 6 ; i++)
    {
        if (names[i].size() == 5)
            cout << names[i] << endl;
    }

    return 0;
}