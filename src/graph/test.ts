// run the file by command -> ts-node src/graph/test.ts

import Graph from ".";

const graph = new Graph<number>();

// Add some edges to the graph
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(5, 6);

// console.log(graph.dfs(1));
// console.log(graph.dfs(5));
console.log(graph.bfs(1));
