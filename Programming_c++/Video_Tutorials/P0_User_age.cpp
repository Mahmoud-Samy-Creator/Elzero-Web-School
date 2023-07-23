#include <iostream>
using namespace std;

int main()
{
    cout << "========================================\n";
    cout << "======== Enter your currunt age ========\n";
    cout << "========================================\n";

    int age;

    cin >> age;

    int age_in_days = age * 365;
    int age_in_hours = age_in_days * 24;
    int age_in_minutes = age_in_hours * 60;
    int age_in_seconds = age_in_minutes * 60;

    cout << "Your age in days is " << age_in_days << " Days\n";
    cout << "Your age in hours is " << age_in_days << " Hour\n";
    cout << "Your age in minutes is " << age_in_minutes << " Minute\n";
    cout << "Your age in seconds is " << age_in_seconds << " Second\n";
    
    return 0;
}

