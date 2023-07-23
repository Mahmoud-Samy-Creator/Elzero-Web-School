#include <iostream>
using namespace std;

int main()
{
    cout << "=== Enter a number to represent it's ascii=== \n";
    int inputNum;

    cin >> inputNum;

    cout << "The ascii representation is: " << char(inputNum) << endl;
    
    return 0;
}