CamelCase

There is a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , determine the number of words in .

Example

There are  words in the string: 'one', 'Two', 'Three'.

Function Description

Complete the camelcase function in the editor below.

camelcase has the following parameter(s):

string s: the string to analyze
Returns

int: the number of words in s

function camelcase(s) {
    // Write your code here
    let words = 1;
    for(let i=0;i<s.length;i++){
        if(s[i] === s[i].toUpperCase() )
            {
               words++;
            }
    }
    return words;

}