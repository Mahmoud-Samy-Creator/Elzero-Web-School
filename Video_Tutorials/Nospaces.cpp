#include "main.h"
 
int nospaces(string name)
{
    int i = 0;

    for (i = 0 ; i < size(name) ; i++)
    {
        if(isspace(name[i]))
            continue;
        else
            cout << name[i];
    }

    return 0;
}
int main() {
    string name = "E L Z E R O";

    nospaces(name);

    return 0;
}