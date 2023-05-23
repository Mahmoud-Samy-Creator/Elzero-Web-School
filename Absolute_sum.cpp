#include "main.h"

int getAbsSum (int *arr)
{
    int i;
    int sum = 0;

    for (i = 0 ; arr[i] != '\0'; i++)
        if (arr[i] < 0)
            arr[i] *= arr[i] * (-1);
    
    for (i = 0 ; arr[i] != '\0'; i++)
        sum += arr[i];

    return sum;
    
}

int main()
{
    int arr[] = {2, -1, 4, 8, 10};

    int arr[] = {2, -1, 4, 8, 10};
        arr[] = {2, -1, 4, 8, 10};
        arr[] = {2, -1, 4, 8, 10};
        arr[] = {2, -1, 4, 8, 10};


}