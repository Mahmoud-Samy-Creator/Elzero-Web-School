#include "main.h"
string greeting(string Name, string gender)
{
    if(gender == "Male")
        return ("Hello Mr " + Name);
    else
        return ("Hello Miss " + Name);
}

string greeting(string Name)
{
    return ("Hello "+ Name);
}
int main() {
    cout << greeting("Osama", "Male") << "\n"; // Hello Mr Osama
    cout << greeting("Eman", "Female") << "\n"; // Hello Miss Eman
    cout << greeting("Sameh") << "\n"; // Hello Sameh
    return 0;
}