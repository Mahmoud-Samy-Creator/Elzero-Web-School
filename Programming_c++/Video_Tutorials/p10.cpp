#include "main.h"
 
int main() {
    int numbers[3][5] = {
        {1, 5, 10, 16, 23},
        {2, 4, 8, 16, 32},
        {1, 1, 2, 3, 5}
    };

    int answers[3], points = 0, i = 0;
    
    while(1)
    {
        cout << "Your test is to enter the missing number of sequence: - \n";
        cout << "Sequence 1: 1 | 5 | 10| 16 | ??\n";
        cout << "Your answer: ";
        cin >> answers[0];
        cout << "\n ========================================= \n" << endl;

        cout << "Sequence 2: 2 | 4 | 8 | 16 | ??\n";
        cout << "Your answer: ";
        cin >> answers[1];

        cout << "\n ========================================= \n" << endl;

        cout << "Sequence 3: 1 | 1 | 2 | 3 | ??\n";
        cout << "Your answer: ";
        cin >> answers[2];
        
        for (i = 0 ; i < 3 ; i++)
        {
            if (answers[i] == numbers[i][4])
                points++;
        }

        cout << "Your score is " << points << " / 3" << endl;


        if (points == 3)
        {
            cout << "Congrats, you passed";
            break;
        }

        else
        {
            cout << "Try again\n";
            cout << "\n ========================================== \n" << endl;
        }
            
    }
         
    return 0;
}