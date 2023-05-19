#include <iostream>
using namespace std;

int main(void)
{
    int num;

    cout << "=== Enter a number to check ===\n";
    cout << "===== If it is even or odd =====\n";
    cout << "==== Enter 0000 to stop ====\n";

    cin >> num;

    while(1)
    {
        
        if (num % 2 == 0)
        {
            cout << "Number " << num << " is even\n";
        }

        else if(num % 2 != 0)
        {
            cout << "Number " << num << "is odd\n";
        }

        /*
        else if(num == 99)
        {
            break;
        }
        */
        else
        {
            cout << "You did not entered a number";
        }

        cin >> num;
    }
}