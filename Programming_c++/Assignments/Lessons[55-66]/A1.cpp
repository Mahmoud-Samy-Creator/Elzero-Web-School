#include "main.h"
 
int calcspecial(int a, int b)
{
    if (a == b)
        return a+b;
    
    else if (a > b)
        return a-b;
    
    else
        return b-a;
}

int main() {
    cout << calcspecial(40, 40) << "\n";    // First = Second -> 40 + 40 = 80
    cout << calcspecial(200, 50) << "\n";   // First > Second -> 200 - 50 = 150
    cout << calcspecial(100, 300) << "\n";  // First < Second -> 300 - 100 = 200

    return 0;
}