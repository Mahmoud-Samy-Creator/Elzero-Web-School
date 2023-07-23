#include "main.h"

int main()
{
    int by = 82; // by => Birth Year
    int s = 500; // s => Salary

    (by > 80) ? ((s < 600)? cout << "Ok\n" : cout << "High\n" ) : (cout << "Not Ok\n");

    
    if (by > 80)
    {
        if (s < 600)
            cout << "Ok\n";
        else
            cout << "High\n";
    }

    else
        cout << "Not Ok\n";
}