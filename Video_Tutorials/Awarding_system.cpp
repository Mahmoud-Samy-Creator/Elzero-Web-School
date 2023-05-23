#include "main.h"

int main()
{
    short num;
    cout << "== Enter your number here ==\n";

    cin >> num;

    switch(num)
    {
        case 1:
            cout << "Gift(1)";
            break;
        case 2:
            cout << "Gift(2)";
            break;
        case 3:
            cout << "Gift(3)";
            break;
        case 4:
            cout << "Gift(4)";
            break; 
    }
}