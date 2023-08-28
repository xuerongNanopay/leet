import java.util.HashSet;
import java.util.LinkedList;
import java.util.Arrays;

class Solution {
    private LinkedList<Integer>[] prereqs;
    private HashSet<Integer> seen;

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        this.prereqs = new LinkedList[numCourses];
        Arrays.fill(this.prereqs, null);
        this.prereqs = prepareList(numCourses, prerequisites);
        this.seen = new HashSet<Integer>();


        for ( int i = 0 ; i < numCourses ; i++ ) {
           if ( search(i) == false ) return false;
        }

        return true;
    }

    private LinkedList[] prepareList(int numCourses, int[][] prerequisites) {
        LinkedList<Integer>[] tmp = new LinkedList[numCourses];
        Arrays.fill(tmp, null);
        for ( int i = 0 ; i < prerequisites.length ; i++ ) {
            int course = prerequisites[i][0];
            int pre = prerequisites[i][1];

            if ( tmp[course] == null ) tmp[course] = new LinkedList<Integer>();
            tmp[course].add(pre);
        }
        return tmp;
    }

    private boolean search(int course) {
        if ( this.prereqs[course] == null ) return true;
        if ( seen.contains(course) ) return false;

        seen.add(course);

        LinkedList<Integer> pre = this.prereqs[course];

        for ( int i = 0 ; i < pre.size() ; i++ ) {
            int p = pre.get(i);
            if ( search(p) == false ) return false;
        }
        this.prereqs[course] = null;
        return true;
    }
}