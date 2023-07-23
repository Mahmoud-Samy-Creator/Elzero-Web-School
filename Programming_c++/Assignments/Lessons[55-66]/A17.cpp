#include "main.h"
int pricing(int sold, int used, int newPrice, double tax)
{
    int newPhones = sold - used;
    int newprofit = newPhones * newPrice;
    int usedPrice = newPrice - 200;
    int usedprofit = used * usedPrice;
    int profitBeforeTax = newprofit + usedprofit;
    double Tax = profitBeforeTax * (tax / 100);
    double profitAfterTax = profitBeforeTax - Tax;

    return profitAfterTax;
}
int main()
{
    cout << pricing(50, 10, 800, 20) << "\n"; // 30400
    return 0;
}

