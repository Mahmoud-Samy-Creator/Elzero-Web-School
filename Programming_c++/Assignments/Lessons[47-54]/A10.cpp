#include "main.h"
 
int main() {
    short i = 0;
    string friends[] = {"Ahmed", "Mohamed", "ameer", "Ashraf", "Amany"};

    cout << "Using for loop" << endl;
    cout << "================================\n";

    for(i = 0 ; i < 5 ; i++)
    {
        if(friends[i][0] == 'A')
            cout << friends[i] << endl;
    }
    
    cout << endl;

    cout << "Using while loop" << endl;
    cout << "================================\n";

    i = 0;

    while (i < 5)
    {
        if(friends[i][0] == 'A')
            cout << friends[i] << endl;
        i++;
    }
    // Your code here
    return 0;
}