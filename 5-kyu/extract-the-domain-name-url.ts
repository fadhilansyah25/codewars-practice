// Description
/* 
    Write a function that when given a URL as a string, parses out just the domain name 
    and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

// Solution
function domainName(url: string) {
  //your code here
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^./]+)\./);
  return match ? match[1] : null;
}

// Manual Test
console.log(domainName("http://google.com")); // should => "google"
console.log(domainName("http://google.co.jp")); // should => "google"
console.log(domainName("www.xakep.ru")); // should => "xakep"
console.log(domainName("https://youtube.com")); // should => "youtube"
