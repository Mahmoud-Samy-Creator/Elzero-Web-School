#include "main.h"
 
int main() {
    int i = 0, j = 0;
    string friends[] = {"Ahmed", "Osama", "Ameer"};

    for(i = 0 ; i < 3 ; i++)
    {
        cout << "= " << friends[i] << " =" << endl;
        cout << "== ";

        for (j = 0 ; j < friends[i].size() ; j++)
        {
            cout << friends[i][j];
            if (friends[i][j+1] != '\0')
                cout << ", ";
        }
        cout << " =";
        cout << "\n" << "\n";
        j = 0;
    }
    // Your code here
    return 0;
}