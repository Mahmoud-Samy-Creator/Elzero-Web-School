#include <iostream>
using namespace std;

int main()
{
    cout << "=== Enter a character to represent it's ascii=== \n";
    char inputchar;

    cin >> inputchar;

    cout << "The ascii representation is: " << int(inputchar) << endl;
    
    return 0;
}