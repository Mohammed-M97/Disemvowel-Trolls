function disemvowel(str) {

    // Loop
    let al = [ 'a', 'e', 'i', 'o', 'u', 
                'A', 'E', 'I', 'O', 'U' ];
        let result = "";
        
        for(let i = 0; i < str.length; i++) 
        {
            
            if (!al.includes(str[i]))
            {
                result += str[i];
            }
        }
    return result;

    // Regex 

    return str.match(/[^aeiou]/gi).join('');

    // Replace

    let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''))
    return newStr;
}

console.log(disemvowel("GeeeksforGeeks - A Computer Science "));