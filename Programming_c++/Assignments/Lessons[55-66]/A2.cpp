#include "main.h"
 
double money(float fees, int days)
{
    if(days % 7 == 0)
    {
        int holidays = (days / 7) * 2;
        int chellout = days - holidays;
        float needeMoney = fees / chellout;

        return needeMoney;

    }

    else
    {
        int holidays = int(days/7) * 2;
        int chellout = days - holidays;
        float neededMoney = fees / chellout;

        return neededMoney;
    }
}
int main() {
      /*
    Hints
    21 Days Has 3 "Weeks"
    Every "Week" You Have 2 Holidays.
    Total = 3 * 2 = 6 Holidays From 21 Days
  */
    cout << money(2015, 21) << "\n"; // 134.333
    cout << money(4500, 40) << "\n"; // 150
    return 0;
}