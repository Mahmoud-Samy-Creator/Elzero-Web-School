#include "main.h"
double avg(double money[], int monsize)
{
  short i = 0;
  double sum = 0;

  for (i = 0 ; i < monsize ; i++)
    sum += money[i];
    
    return sum / monsize;
}

int main()
{
  double money[] = { 10, 20, 15, 25, 30, 35 };
  double monsize = size(money);
  cout << avg(money, monsize) << "\n"; // 22.5
  return 0;
}