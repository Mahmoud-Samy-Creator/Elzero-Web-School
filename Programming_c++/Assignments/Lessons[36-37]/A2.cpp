#include "main.h"


int main()
{
  int day;
  cin >> day;

  if (day >= 1 && day <=5)
    cout << day << " Shop Is Open";

  else
    cout << "Day Is Not Valid";


/*

  switch (day)
  {
  case 1:
    cout << "1 Shop Is Open";
    break;
  case 2:
    cout << "2 Shop Is Open";
    break;
  case 3:
    cout << "3 Shop Is Open";
    break;
  case 4:
    cout << "4 Shop Is Closed";
    break;
  case 5:
    cout << "5 Shop Is Closed";
    break;
  default:
    cout << "Day Is Not Valid";
  }
*/
  return 0;
}
