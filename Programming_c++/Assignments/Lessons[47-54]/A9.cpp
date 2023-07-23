#include "main.h"
 
int main() {

    short i = 0;
    string friends[] = {"Ahmed", "Mohamed", "Sayed", "Gamal"};

    cout << "Using for loop" << endl;
    cout << "================================\n";
    
    for (i = 0 ; i < 4 ; i++)
    {
        if (i == 1 || i == 2)
            cout << friends[i] << endl;
    }

    cout << endl;
    
    i = 0;

    cout << "Using for loop" << endl;
    cout << "================================\n";

    while (i < 4)
    {

    if (i == 1 || i == 2)
        cout << friends[i] << endl;
        i++;
    }
    // Your code here
    return 0;
}