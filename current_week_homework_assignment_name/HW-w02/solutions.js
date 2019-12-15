// 1. The parameter is the local scope variable in the parenthesis in the declaration
// of the function. THe argument is the input you put within the parameter.

// 2. Return actually immediately returns the value within the function, whereas 
// console log prints it to the console/terminal. For this reason, you can actually
// refer to a function within a mathematical equation from another variable/etc. ONLY
// if the function uses return rather than console log.

// PALINDROME
const checkPalindrome = (stringy) => {
    console.log("argument: " + stringy)
    let lowerString = stringy.toLowerCase()
    console.log("lowercase: " + lowerString)
    let newString = lowerString.split("").reverse().join("")
    console.log("reversed: " + newString)
    if (lowerString == newString) {
        return true
        console.log("true");
    } else {
        return false
        console.log("false")
    }
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

/////////////////////////////////////////////