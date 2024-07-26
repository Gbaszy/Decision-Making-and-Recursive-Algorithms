function isPalindrome(str) {
    // Helper function to normalize the string
    function normalizeString(s) {
        return s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    // Recursive function to check palindrome
    function checkPalindrome(s, left, right) {
        // Base case: if the left index crosses the right index
        if (left >= right) {
            return true;
        }
        // Compare characters at the left and right indices
        if (s[left] !== s[right]) {
            return false;
        }
        // Recur with the next pair of characters
        return checkPalindrome(s, left + 1, right - 1);
    }

    // Normalize the input string
    const normalizedStr = normalizeString(str);
    
    // Start the recursive check
    return checkPalindrome(normalizedStr, 0, normalizedStr.length - 1);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("Hello, World!")); // false
