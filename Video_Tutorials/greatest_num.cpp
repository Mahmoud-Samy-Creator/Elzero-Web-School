#include <iostream>
using namespace std;

int main()
{
    cout << "=== I will tell you which is the greatest === ";
    cout << "==== Enter 3 numbers ====\n";

    short num1, num2, num3;

    cin >> num1 >> num2 >> num3;

    if (num1 > num2 && num1 > num3)
    {
        cout << "Number " << num1 << " is the greatest";
    }

    else if(num2 > num1 && num2 > num3)
    {
        cout << "Number " << num2 << " is the greatest";
    }
    
    else if(num3 > num1 && num3 > num2)
    {
        cout << "Number " << num3 << " is the greatest";
    }
    
    else
    {
        cout << "They are equal";
    }
    
    return 0;
}