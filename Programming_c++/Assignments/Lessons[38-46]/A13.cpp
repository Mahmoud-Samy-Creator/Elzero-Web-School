#include "main.h"
 
int main()
{
    string fName = "Elzero ";
    string mName = "Web ";
    string lName = "School";

    cout << fName + mName + lName << endl;
    cout << fName.append(mName).append(lName) << endl;
    cout << fName;


// Output Needed
//Elzero Web School
//Elzero Web School
//Elzero Web School
    
    return 0;
}