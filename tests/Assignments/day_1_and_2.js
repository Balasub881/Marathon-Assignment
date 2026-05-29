//Assignment 1
function isOddOREven(num)
{
    if(num%2==0)
         return "Even Number";
    else        
        return "Odd Number"; 
}

let result1 = isOddOREven(21);
console.log(result1);

//Assignment 2
function named(num)
{
   if (num > 0)
        return "Positive";
    else if (num < 0)
        return "Negative";
    else
        return "Zero";
}

let result2 = named(+6);
console.log(result2);

//Assignment 3
function launchBrowser(browserName)
{
    if (browserName.toLowerCase() == "chrome")
        console.log("Launching Chrome browser");
    else
        console.log("Browser not supported");
}
function runTests(testType)
{
    switch(testType.toLowerCase())
    {
        case "sanity":
            console.log("Running Sanity tests");
            break;
        case "regression":
            console.log("Running Regression tests");
            break;
        default:
            console.log("Running Smoke tests");
    }
}
launchBrowser("CHROME");
runTests("SANITY");

//Assignment 4
function reverseString(str)
{
    let reversed = "";
    for (let i=str.length-1; i>=0; i--)
    {
        reversed += str[i];
    }
    console.log(reversed);
    return reversed;
}
function isPalindrome(name,reversedString)
{
    if (name.toLowerCase() == reversedString.toLowerCase())
    {
        return true;
    }
    else
    {
        return false;
    }
}
let name = "Malayalam";
let result3 = isPalindrome(name, reverseString(name));
console.log(result3);


