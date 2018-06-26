import java.util.ArrayList;

/**
 * Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 This looks simple but remember that you cannot just stop when you find a repeating character. You have to continue iterating
 the string as it might contain a larger substring without any repeating characters. Also when you find a repeating
 character, you need to look back and start from the index where you found the repeating character.
 */

class UniqueStringLength {
    public static void main(String args[]) {
        UniqueStringLength solution = new UniqueStringLength();
        solution.lengthOfLongestSubstring("tmmzuxt");

    }
    public int lengthOfLongestSubstring(String s) {
        ArrayList<Character> uniqueCharacters = new ArrayList<Character>();
        int uniqueCharacterCount = 0;
        int uniqueCharacterCountMax = 0;
        int count = 0, start = 0; // count shows which character in the string we are iterating.
        while(count < s.length()) {
            int order = findCharacter(uniqueCharacters, s.charAt(count));
            //  System.out.println(order + " " +count);
            if(order == -1) {
                uniqueCharacters.add(s.charAt(count));
                ++uniqueCharacterCount;
                if(uniqueCharacterCountMax <= uniqueCharacterCount) {
                    uniqueCharacterCountMax = uniqueCharacterCount;
                }
                ++count;
            }
            else {
                    count = start + order + 1;
                start = count;
                uniqueCharacterCount = 0;
                uniqueCharacters = new ArrayList<Character>();

            }
        }

        return uniqueCharacterCountMax;

    }

    int findCharacter(ArrayList<Character> list, Character c) {
        for(int i = 0; i < list.size(); ++i) {
            if(list.get(i) == c) {
                return i;
            }
        }
        return -1;
    }
}

