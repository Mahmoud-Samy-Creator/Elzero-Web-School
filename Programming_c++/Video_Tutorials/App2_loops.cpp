#include "main.h"
 
int main() {
    short guess_tries = 0;
    short guess_num = 7;
    short guessing = 0;
    
    cout << "== Guess a number between 1 - 10 ==\n";

    while(1)
    {
        cin >> guessing;

        if (guess_tries == 2)
        {
            cout << "= You failed, the correct guess is: 7\n";
            break;
        }

        if ( guessing == 7)
        {
            cout << "= Congrats, you win =\n";
            break;
        }

        else
        {
            cout << "=* Hard luck, try again *=\n";
            guess_tries++;
        }
    }
    return 0;
}