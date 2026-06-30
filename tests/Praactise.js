
console.log("Odd Numbers are : ")
for (let i=1;i<=20;i=i+2)
{
        console.log(i);
}

console.log("Odd Numbers are : ")
for (let i=1;i<=20;i++)
{
    if(i%2!=0)
    {
        
    }
}

function isOddOREven(num)
{
        if(num%2==0)
        {
            return "Even Number";
        }
        else        
        {
            return "Odd Number";
        }   
}

let result = isOddOREven(20);
console.log(result);