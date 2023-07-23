#include "main.h"
int main(void)
{
    vector <int> nums = {100, 200, 300, 400};

    cout << "Printing vector elements using loop\n";

    for (int i : nums)
        cout << i << endl;

    nums.push_back(500);

    cout << "=============\n";

    cout << "Printing vector elements using loop\n after adding an element\n";
    for (int i : nums)
        cout << i << endl;

    cout << "=============\n";

    cout << "First element: "<< nums.front() << endl;
    cout << "Last element: " << nums.back() << endl;
    cout << "Vector size: " << nums.size() << endl;
}