#include "main.h"
int main(void)
{
    vector<int> numbers = { 10, 20, 30, 40 };
    vector<int> :: iterator first = numbers.begin();
    vector<int> :: iterator last = numbers.end() - 1;

    //Printing first element by using 4 different ways
    cout << *first << endl;
    cout << numbers.front() << endl;
    cout << numbers.at(0) << endl;
    cout << numbers[0] << endl;

    cout << "==========================\n";

    //Printing last element by using 4 different ways
    cout << *last << endl;
    cout << numbers.back() << endl;
    cout << numbers.at(numbers.size() - 1) << endl;
    cout << numbers[numbers.size() - 1] << endl;
}