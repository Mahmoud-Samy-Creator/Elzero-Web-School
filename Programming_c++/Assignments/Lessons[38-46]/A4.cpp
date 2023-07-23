#include "main.h"

int main()

{
    // Example 1
    int i = 0, j = 0;
    int vals[]{100, 200, 500, 400, 200};
    int first = vals[j];
    int last = sizeof(vals) / sizeof(vals[0]);
    int middle = (last - 1) / 2;

    cout << "The first term is " << vals[j] << endl;
    cout << "The last term is " << vals[last - 1] << endl;
    cout << "The middle term is " << vals[middle] << endl;
    
    for (i = 0 ; i < last ; i++)
    {
        if ((vals[i]) + vals[last - i - 1] > vals[middle])
        {
            cout << vals[i] << " + " << vals[last - i - 1] << " = " << vals[i] + vals[last - i - 1] << endl;
            cout << vals[i] + vals[last - i - 1]  << " > " << vals[middle] << endl;
            break;
        }
        else
        {
            cout << "Noo\n";
            j++;
        }
    }

    return 0;
}

/*
Needed Output
   "200 + 400 = 600"
    "600 > 500"
*/

