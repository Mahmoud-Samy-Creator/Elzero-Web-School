#include "main.h"
 
int main() {
    short i = 0, j = 0;
    int help_num = 4;
    int nums[] = {2, 4, 5, 6, 10};
    
    for (i = 0 ; i <= help_num ; i++)
    {
        if (i == 2)
        {
            cout << nums[2] << '+' << nums[2] 
            << '=' << nums[2] + nums[2] << endl;
            break;
        }
        else if (i > 2)
        {
            cout << nums[i] << '+' << nums[help_num - (help_num - j)] 
            << '=' << nums[i] + nums[help_num - (help_num - j)] << endl;

            j--;
        }
    
        cout << nums[i+j] << '+' << nums[help_num - j] 
        << '=' << nums[i+j] + nums[help_num - j] << endl;
        j++;
    }

    j = 1;
    for (i = 3 ; i <= help_num ; i++)
    {
        cout << nums[i] << '+' << nums[help_num - (help_num - j)] 
        << '=' << nums[i] + nums[help_num - (help_num - j)] << endl;
        j--;
    }

    return 0;
}