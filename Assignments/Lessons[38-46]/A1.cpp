#include "main.h"

int main()
{
    int i = 0;
    int nums[]{100, 300, 600, 900};
    string awards[]{"iPhone", "iPad", "PC", "Car"};

    for (i = 0 ; i < 4 ; i++)
    {
        cout << "Number " << nums[i] << " Award Is: " << awards[i] << endl;
    }

    
// Output Needed

/*
"Number 100 Award Is: iPhone"
"Number 300 Award Is: iPad"
"Number 600 Award Is: PC"
"Number 900 Award Is: Car"
*/
    return 0;
}

