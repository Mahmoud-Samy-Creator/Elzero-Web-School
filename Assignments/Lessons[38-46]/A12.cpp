#include "main.h"
 
int main() {

        // Do Not Edit The Next 6 Lines
    int nums[] = {1, 2, 3, 5};
    int vals[] = {10, 20, 40, 30, 10, 60};
    int i1 = nums[3]; //5, vals[i1] = vals[5] = 60
    int i2 = nums[0]; //1, vals[i2] = vals[1] = 20
    int i3 = nums[1]; //2, vals[i3] = vals[2] = 40
    int i4 = nums[2]; //3, vals[i4] = vals[3] = 30

    // Need To Get Ouput 150
    // You Can Use Plus Operator Only

    int result = vals[i1] + vals[i2] + vals[i3] + vals[i4];

    cout << "The result: " << result << endl;
    return 0;
}