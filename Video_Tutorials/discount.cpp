#include "main.h"

int main()
{
    short year, discount;

    cout << "== Enter no. of years ==\n";
    cin >> year;

    switch(year)
    {
        case 1:
            discount = 10;
            break;
        case 2:
            discount = 20;
            break;
        case 3:
            discount = 30;
            break;
    }
    cout << "== You have discount " << discount;

    return 0;
}