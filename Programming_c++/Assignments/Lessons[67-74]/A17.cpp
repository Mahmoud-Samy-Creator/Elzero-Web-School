#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> n1 = { 1, 2, 3 };
    vector<int> n2 = { 4, 5, 6 };
    vector<int> allvectors (n1.size() + n2.size());
    int i = 0, j = 0;


    
    // Your Insert Code Here
    for (i = 0 ; i < n1.size() ; i++)
        allvectors.insert(allvectors.begin() + i, n1.at(i));
    
    i = 0;

    for (i = 3 ; i < (n1.size() + n2.size()); i++)
    {
        allvectors.insert(allvectors.begin() + i, n2.at(j));
        j++;
    }

    i = 0;

    for (i = 0 ; i < n1.size() + n2.size() ; i++)
        allvectors.pop_back();

    for (int i : allvectors)
    {
        cout << i << "\n";
    }

    return 0;
}
