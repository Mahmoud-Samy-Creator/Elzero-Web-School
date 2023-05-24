#include "main.h"

int main()
{
    int age = 20;
    int points = 450;

    if (age > 18)
    {
        cout << "Yes: the age is okay\n";

        if (points > 500)
            cout << "Yes: the points are okay\n";
        else
            cout << "No: the points are not okay";
    }

    else
    {
        cout << "No: the age is not okay\n";

        if (points > 500)
            cout << "Yes: the points are okay\n";
        else
            cout << "No: the points are not okay";
    }
}