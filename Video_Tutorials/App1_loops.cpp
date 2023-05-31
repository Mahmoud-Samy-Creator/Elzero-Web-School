#include "main.h"
 
int main()
{
    int arr[] = {10, 20, -20, 13, 30, -30, 40}, sum = 0;
    short size = sizeof(arr) / sizeof(arr[0]), i = 0;

    for(i = 0 ; i < size ; i++)
    {
        if(arr[i] > 0 && arr[i % 2 == 0])
        {
            sum += arr[i];
        }
    }

    cout << "The sum is " << sum << endl;

    

    // Your code here
    return 0;
}