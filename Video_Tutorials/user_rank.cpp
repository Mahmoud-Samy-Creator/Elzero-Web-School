#include <iostream>
using namespace std;

int main()
{
    short score;

    cout << "* Enter your score here: ";
    cin >> score;
    
    if (score > 0 && score <= 500)
        cout << "\n Not bad \n";
    

    else if (score > 500 && score <= 1000)
        cout << "\n Average \n";
    
    else if (score > 1000)
        cout << "\n Awasome \n";

    else
        cout << "You typed a negative value";

    return 0;
}