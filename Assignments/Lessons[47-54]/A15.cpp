#include "main.h"
 
int main() {
    short i = 0, j = 0;
    int help_num = 4;
    int nums[] = {2, 4, 5, 6, 10};
    
    for (i = 0 ; i <= help_num ; i++)
    {
     int n = nums[i];
     int opposite = nums[help_num - i];

     cout << n << " + " << opposite << " = " << n + opposite << endl;   
    }

    return 0;
}