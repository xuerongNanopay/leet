//934. Shortest Bridge

import java.util.*;

class Solution {
    private int high;
    private int width;
    private int[][] grid;

    public int shortestBridge(int[][] grid) {
        this.high = grid.length;
        this.width = grid[0].length;
        this.grid = grid;

        //Find one island
        //mark entire island to 2 and push into queue.
        // do dfs for the queue until hit first 1.

        Integer[] startPosition = findOneIsland();
        LinkedList<Integer[]>  queue = markFirstIsland(startPosition[0], startPosition[1]);
        return minPath(queue) - 1;
    
    }

    private void print2DArray() {
        for ( int i = 0 ; i < high ; i++ ) {
            for ( int j = 0 ; j < width ; j++ ) {
                System.out.print(grid[i][j] + ", ");
            }
            System.out.println();
        }
    }

    private int getValue(Integer[] position) {
        return grid[position[0]][position[1]];
    }

    private void setValue(Integer[] position, int value) {
        grid[position[0]][position[1]] = value;
    }

    private Integer[] findOneIsland() {

        for ( int i = 0 ; i < high ; i++ ) {
            for ( int j = 0 ; j < width ; j++ ) {
                if ( grid[i][j] == 1 ) {
                    return new Integer[]{i, j};
                }
            }
        }
        throw new RuntimeException("can not find Island");
    }

    private int minPath(LinkedList<Integer[]> queue) {
        int path = 0;

        while ( queue.size() != 0 ) {
            path++;
            int length = queue.size();

            for ( int l = 0 ; l < length ; l++ ) {
                Integer[] cur = queue.removeFirst();
                List<Integer[]> neigbors = findNeibor(cur[0], cur[1]);
                for ( int i = 0 ; i < neigbors.size() ; i++ ) {
                    Integer[] nei = neigbors.get(i);
                    if ( getValue(nei) == 1 ) {
                        return path;
                    }
                    if ( getValue(nei) == 2) continue;
                    setValue(nei, 2);
                    queue.addLast(nei);
                }
            }
        }

        return path;
    }

    private LinkedList<Integer[]> markFirstIsland(int i, int j) {
        LinkedList<Integer[]> rets = new LinkedList<Integer[]>();
        LinkedList<Integer[]> queue = new LinkedList<Integer[]>();

        queue.push(new Integer[]{i, j});
        grid[i][j] = 2;

        while ( queue.size() != 0 ) {
            Integer[] cur = queue.removeFirst();
            rets.push(cur);

            List<Integer[]> neigbors = findNeibor(cur[0], cur[1]);
            neigbors.stream().forEach(position -> {
                if ( getValue(position) == 1 ) {
                    setValue(position, 2);
                    queue.push(position);
                }
            });
        }
        return rets;
    }

    private List<Integer[]> findNeibor(int i, int j) {
        List<Integer[]> ret = new ArrayList<Integer[]>(4);
        
        if ( i - 1 >= 0 ) {
            ret.add(new Integer[]{i-1, j});
        }

        if ( i + 1 < high ) {
            ret.add(new Integer[]{i+1, j});
        }

        if ( j - 1 >= 0 ) {
            ret.add(new Integer[]{i, j-1});
        }

        if ( j + 1 < width ) {
            ret.add(new Integer[]{i, j+1});
        }

        return ret;
    }
}