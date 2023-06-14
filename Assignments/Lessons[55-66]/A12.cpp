#include "main.h"

string createurl(string https, string website, string domain)
{
        return https + "://" + "www." + website + "." + domain + '\n';
}

string createurl(string https, string website, string domain, bool www)
{
        return https + "://" + website + "." + domain + '\n';
}

int main()
{
    cout << createurl("https", "elzero", "org") << "\n"; //https://www.elzero.org
    cout << createurl("https", "google", "com", false) << "\n"; //https://google.com
    cout << createurl("http", "learn", "net") << "\n"; //http://www.learn.net
    return 0;
}