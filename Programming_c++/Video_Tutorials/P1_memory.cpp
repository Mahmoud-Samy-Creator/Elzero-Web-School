#include<iostream>
using namespace std;
int main()
{
    int kilobytes, bytes, bits;

    cout << "\n== Enter the size in kilobytes ==\n";
    cin >> kilobytes;

    bytes = kilobytes * 1024;
    bits = kilobytes * 1024;

    cout << "\nSize in Kilobytes: " << kilobytes;
    cout << "\nSize in bytes: " << bytes;
    cout << "\nSize in bits: " << bits;
}