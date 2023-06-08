#include "main.h"

string swapping(string str)
{
    int i = 0;

    for (i = 0 ; str[i] ; i++)
    {
        if (isupper(str[i]))
            str[i] = char(tolower(str[i]));

        else
            str[i] = char(toupper(str[i]));
    }

    return str;
}

int main() {
    cout << swapping("hero Of THe PROgramming")
     << "\n"; // hERO oF tHE proGRAMMING

    return 0;
}