#include "main.h"

int main()
{
    int i = 0;
    int vals[] = {10, 20, 30};

    while (vals[i])
    {
        vals[i] *= 10;
        i++;
    }

    cout << vals[0] << "\n"; // 100
    cout << vals[1] << "\n"; // 200
    cout << vals[2] << "\n"; // 300
}