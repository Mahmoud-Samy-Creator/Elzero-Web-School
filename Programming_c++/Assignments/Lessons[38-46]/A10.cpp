#include "main.h"
 
int main() {
    array<int, 6> nums = {10, 20, 30, 40, 20, 50};

    
    cout << "Method(1)" << endl;
    cout << nums.front() << endl;
    cout << nums.back();

    cout << "\n =========================== \n";

    cout << "\nMethod(2)" << endl;
    cout << nums[0] << endl;
    cout << nums[5] << endl;

    cout << "\n =========================== \n";

    cout << "\nMethod(3)" << endl;
    cout << *nums.begin() << endl;
    cout << *(nums.end() - 1) << endl;




/*
  // Method 1
  "First: 10"
  "Last: 50"

  // Method 2
  "First: 10"
  "Last: 50"

  // Method 3
  "First: 10"
  "Last: 50"
  
*/
    return 0;
}