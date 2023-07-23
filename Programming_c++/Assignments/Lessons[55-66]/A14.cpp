#include "main.h"

int calculate(int a, int b, char op[] = "a")
{

    if(op == "a" || op == "add")
        return a + b;
    
    if(op == "subtract" || op == "s")
        return a - b;

    if(op == "multiply" || op == "m")
        return a * b;
    
    else
        return 0;
}
int main()
{
    cout << calculate(10, 20) << "\n"; // 30
    cout << calculate(10, 20, "a") << "\n"; // 30
    cout << calculate(10, 20, "s") << "\n"; // -10
    cout << calculate(10, 20, "subtract") << "\n"; // -10
    cout << calculate(10, 20, "multiply") << "\n"; // 200
    cout << calculate(10, 20, "m") << "\n"; // 200
    cout << calculate(10, 20, "Invalid") << "\n"; // 0
    return 0;
}