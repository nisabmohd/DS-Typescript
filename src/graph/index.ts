import Queue from "../queue";

export default class Graph<T> {
  private adj: Map<T, Set<T>>;
  private isDirected: boolean;

  public constructor(isDirected?: boolean) {
    this.adj = new Map<T, Set<T>>();
    this.isDirected = isDirected ?? false;
  }

  public addEdge(s: T, d: T | null) {
    if (!this.adj.has(s)) this.adj.set(s, new Set<T>());
    if (d && !this.adj.has(d)) this.adj.set(d, new Set<T>());
    if (!d) return;
    this.adj.get(s)!.add(d);
    if (!this.isDirected) this.adj.get(d)?.add(s);
  }

  private dfsHelper(s: T, vis: Set<T>): T[] {
    vis.add(s);
    const ans: T[] = [s];
    this.adj.get(s)!.forEach((item) => {
      if (!vis.has(item)) {
        ans.push(...this.dfsHelper(item, vis));
      }
    });
    return ans;
  }

  public dfs(s: T): T[] {
    if (!this.adj.has(s)) return [];
    return this.dfsHelper(s, new Set<T>());
  }

  public bfs(s: T): T[] {
    const ans: T[] = [];
    if (!this.adj.has(s)) return [];
    const visited = new Set<T>();
    const q = new Queue<T>();
    q.insert(s);
    visited.add(s);
    while (q.size != 0) {
      const node = q.remove()!;
      ans.push(node);
      this.adj.get(node)?.forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          q.insert(neighbour);
          visited.add(neighbour);
        }
      });
    }
    return ans;
  }
}
