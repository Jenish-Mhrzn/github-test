// stacks
// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char in map) {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
