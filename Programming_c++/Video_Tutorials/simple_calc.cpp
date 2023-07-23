#include <iostream>
using namespace std;

int main()
{
    short num1, num2;
    char op;

    cout << "== Enter 2 integers ==\n";
    cin >> num1 >> num2;
    cout << "\n == Enter an operator to perform ==\n";
    cout << "'+' ---> summition.\n'-' ---> subtraction.\n'*' ---> multiplication.\n'/' ---> division.\n\n";

    cin >> op;

    if (op == '+')
        cout << num1 << " + " << num2 << " = " << (num1 + num2);

    else if(op == '-')
        cout << num1 << " - " << num2 << " = " << (num1 - num2);

    else if(op == '+')
        cout << num1 << " * " << num2 << " = " << (num1 * num2);

        
    else if(op == '/')
        cout << num1 << " / " << num2 << " = " << (num1 / num2);

    else
        cout << "The operator is not valid";
    
    return 0;
}