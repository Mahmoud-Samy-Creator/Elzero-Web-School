#include "main.h"

int plusandmultiply(int numbers[], int size)
{
    int add = 0;
    int mult = 1;
    int i = 0;

    for(i = 0 ; i < size ; i++)
    {
        if (numbers[i] % 2 == 0)
            add += numbers[i];
        
        else
            mult *= numbers[i];
    }

    cout << "Add = " << add << " \nMult = " << mult << '\n';

    return add + mult;
}
int main() {
    int numbers[] = { 10, 20, 3, 30, 5, 7, 40 };
    int numssize = size(numbers);
    cout << plusandmultiply(numbers, numssize) << "\n";

  // Even Numbers -> 10 + 20 + 30 + 40 = 100
  // Odd Numbers  -> 3 * 5 * 7 = 105
  // Total = 100 + 105 = 205
    return 0;
}