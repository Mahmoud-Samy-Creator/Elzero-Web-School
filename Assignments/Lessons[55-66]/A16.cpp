#include "main.h"
int books(int small, int meduim, int big, int shelf)
{
    short smallBookSpaces = small * 2;
    short meduimBookSpaces = meduim * 4;
    short bigBookSpaces = big * 6;
    short availableSize = shelf * 20;
    short neededSIze = smallBookSpaces + meduimBookSpaces + bigBookSpaces;

    if (neededSIze > availableSize)
        return 0;

    return availableSize - neededSIze;
    


}
int main()
{
    cout << books(10, 4, 3, 4) << "\n"; // 26
    cout << books(10, 4, 3, 2) << "\n"; // 0
    
    return 0;
}