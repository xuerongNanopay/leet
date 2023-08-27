import java.util.HashSet;
import java.util.LinkedList;

class Solution {

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        HashSet<String> seen = new HashSet<String>();

        LinkedList<String> queue = new LinkedList<String>();
        seen.add(beginWord);
        queue.addLast(beginWord);

        int cnt = 0;

        while(queue.size() > 0) {
            cnt++;
            int level = queue.size();

            for ( int i = 0 ; i < level ; i++ ) {
                String cur = queue.removeFirst();
                if ( cur.equals(endWord) ) return cnt;

                for ( String w : wordList ) {
                    if ( seen.contains(w) ) continue;
                    if ( isOneDiff(cur, w) ) {
                        seen.add(w);
                        queue.addLast(w);
                    }
                }
            }
        } 

        return 0;
    }

    private boolean isOneDiff(String a, String b) {
        int cnt = 0;
        for ( int i = 0 ; i < a.length() ; i++ ) {
            if ( a.charAt(i) != b.charAt(i) ) cnt++;
        }

        return cnt == 1 ? true : false;
    }
}