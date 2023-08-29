//Idea: do DFS for every unseen course.
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Arrays;

class Solution {
    private LinkedList[] pres;
    private LinkedList<Integer> ret;
    private HashSet<Integer> seen;
    private HashSet<Integer> cycle; 

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        preparePres(numCourses, prerequisites);
        this.ret = new LinkedList<Integer>();
        this.seen = new HashSet<Integer>();
        this.cycle = new HashSet<Integer>();

        for ( int i = 0 ; i < numCourses ; i++ ) {
            if ( dfs(i) == false ) return new int[]{};
        }

        int[] r = new int[numCourses];
        for ( int i = 0 ; i < this.ret.size() ; i++ ) {
            r[i] = this.ret.get(i);
        }
        return r;
    }

    private void preparePres(int numCourses, int[][] prerequisites) {
        this.pres = new LinkedList[numCourses];
        Arrays.fill(this.pres, null);

        for ( int i = 0 ; i < numCourses ; i++ ) {
            this.pres[i] = new LinkedList();
        }

        for ( int i = 0 ; i < prerequisites.length ; i++ ) {
            int course = prerequisites[i][0];
            int pre = prerequisites[i][1];
            this.pres[course].add(pre);
        }
    }

    private boolean dfs(int course) {
        if ( seen.contains(course) ) return true;
        if ( cycle.contains(course) ) return false;

        cycle.add(course);
        LinkedList<Integer> pre = this.pres[course];
        for ( int i = 0 ; i < pre.size() ; i++ ) {
            if ( dfs(pre.get(i)) == false ) return false; 
        }
        cycle.remove(course);
        seen.add(course);
        this.ret.add(course);
        return true;
    }
}