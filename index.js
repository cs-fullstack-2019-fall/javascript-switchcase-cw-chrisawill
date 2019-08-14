//
// ### Problem 1:
// Put the start of your program in a main function. Ask the user to enter a number to print. Create a switch case that prints 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.

let printN = prompt("Enter a number from 1-5.");
switch (printN)
{
    case "1":
        alert("You said 1");
    break;
    case "2":
        alert("You said 2");
    break;
    case "3":
        alert("You said 3");
    break;
    case "4":
        alert("You said 4");
    break;
    case "5":
        alert("You said 5");
    break;
    default:
        alert("Wrong number.")
}

    // ### Problem 2:
    // Put the start of your program in a main function. Ask the user to enter a 3 digit binary number. Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.

let binary = prompt("Enter a 3 digit binary number, 1,10,11,100,101.");
switch (binary) 
{
    case "1":
        alert("It is 1.");
    break;
    case "10":
        alert("It is 2");
    break;
    case "11":
        alert("It is 3");
    break;
    case "100":
        alert("It is 4");
    break;
    case "101":
        alert("It is 5");
    break;
    default:
        alert("Wrong number");
}                   