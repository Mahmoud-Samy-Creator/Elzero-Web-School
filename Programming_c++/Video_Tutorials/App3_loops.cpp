#include "main.h"
 
int main() {
    int reversed_nums[5];
    int i = 0;
    int size = 5;


    cout << "= Enter 5 numbers =\n";

    for (i = 4 ; i < size && i >= 0; i--)
    {
        cin >> reversed_nums[i];
    
    }

    for (i = 0 ; i < size ; i++)
    {
        cout << reversed_nums[i] << ' ';
    }
    return 0;
}