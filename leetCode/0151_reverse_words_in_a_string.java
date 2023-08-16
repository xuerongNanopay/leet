// 151. Reverse Words in a String

class Solution {
    public String reverseWords(String s) {
        String[] temps = s.trim().split(" ");
        String ret = "";
        for ( int i = temps.length - 1 ; i >= 0 ; i-- ) {
            if ( "".equals(temps[i].trim()) ) continue;

            ret += temps[i].trim();
            if ( i > 0 ) ret += " ";
        }
        return ret;
    }
}