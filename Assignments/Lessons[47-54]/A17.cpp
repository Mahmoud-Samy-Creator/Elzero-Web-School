#include "main.h"
 
int main() {
    int i, j, k;

    for (i = 0 ; i < 2 ; i++)
    {
        for (j = 0 ; j <= 2 ; j++)
        {
            for (k = 0 ; k < 10 ; k++)
            {
                cout << i << j << k << endl;
                if (j == 2 && k == 0)
                    break;
                if (i == 1 && j == 0 && k == 2)
                    break;
            }

            if (i == 1 && j == 0 && k == 2)
                break;
        }
        if (i == 1 && j == 0 && k == 2)
            break;
    }
    return 0;
}