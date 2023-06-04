#include "main.h"
 
string swap(string name)
{
    int i = 0;

    for (i = 0 ; i < size(name) ; i++)
    {
        if(isupper(name[i]))
            name[i] = char(tolower(name[i]));

        else
            name[i] = char(toupper(name[i]));
    }

    return name;
}

int main() {
    string name = "ElzerO";

    cout << swap(name);
    return 0;
}