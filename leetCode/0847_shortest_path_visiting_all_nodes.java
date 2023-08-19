import java.util.*;

class Solution {
    private int successState;

    //key: node index | mask
    public int shortestPathLength(int[][] graph) {
        int totalNodes = graph.length;
        successState = getSuccessState(totalNodes);
        int ret = Integer.MAX_VALUE;

        for ( int i = 0 ; i < totalNodes; i++ ) {
            int tmp = findShortes(graph, getInitialKey(i));
            if ( tmp < ret) ret = tmp;
        }

        return ret;
    }

    public int findShortes(int[][] graph, int initialKey) {
        LinkedList<Integer> queue = new LinkedList<Integer>();
        Set<Integer> visited = new HashSet<Integer>();
        int path = 0;

        if ( isSuccess(initialKey) ) return path;
        
        queue.addLast(initialKey);
        visited.add(initialKey);

        while ( queue.size() > 0 ) {
            path++;

            int curLength = queue.size();

            for ( int i = 0 ; i < curLength ; i++ ) {
                int key = queue.removeFirst();
                int curNode = getNode(key);
                int curState = getState(key);

                //Iterate children of current node
                for ( int j = 0 ; j < graph[curNode].length ; j++ ) {
                    int nextNode = graph[curNode][j];

                    int nextKey = getNextKey(nextNode, curState);

                    if ( isSuccess(nextKey) ) {
                        return path;
                    }
                    if ( visited.contains(nextKey) ) {
                        continue;
                    }

                    queue.addLast(nextKey);
                    visited.add(nextKey);
                }
            }
        }

        return path;
    }

    private boolean isSuccess(int key) {
        return (key & successState) == successState;
    }

    private int getSuccessState(int nodeSize) {
        int ret = 0;
        for ( int i = 0 ; i < nodeSize ; i++ ) {
            ret |= 1 << i;
        }
        return ret;
    }

    private int getNextKey(int nextNode, int curState) {
        return (nextNode << 12) | 1 << nextNode | curState;
    }

    private int getInitialKey(int node) {
        return (node << 12) | 1 << node;
    }

    private int getNode(int key) {
        return key >> 12;
    }

    private int getState(int key) {
        return key & this.successState;
    }

}