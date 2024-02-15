export default class Graph<T> {
  private map: Map<T, Set<T>>;
  private isDirected: boolean;

  public constructor(directed: boolean = false) {
    this.map = new Map<T, Set<T>>();
    this.isDirected = directed;
  }

  public addEdge(src: T, des: T) {
    if (!this.map.has(src)) this.map.set(src, new Set<T>());
    if (!this.map.has(des)) this.map.set(des, new Set<T>());
    this.map.get(src)!.add(des);
    if (!this.isDirected) {
      this.map.get(des)!.add(src);
    }
  }

  public removeEdge(src: T, des: T) {
    if (!this.map.has(src) || !this.map.has(des))
      throw new Error("Invalid source or target");
    this.map.get(src)!.delete(des);
    if (!this.isDirected) {
      this.map.get(des)!.delete(src);
    }
  }

  public hasEdge(src: T, des: T) {
    return this.map.get(src)?.has(des);
  }

  private DFSUtil(src: T, visited: Set<T>): T[] {
    visited.add(src);
    const arr: T[] = [src];
    this.map.get(src)!.forEach((k) => {
      if (!visited.has(k)) {
        arr.push(...this.DFSUtil(k, visited));
      }
    });
    return arr;
  }

  public DFS(src: T, coverAll: boolean): T[] {
    if (!this.map.has(src)) throw new Error("Vertex not found");
    let visited = new Set<T>();
    const ans: T[] = [];
    if (coverAll) {
      const itr = this.map.keys();
      while (true) {
        const { value, done } = itr.next();
        if (done) break;
        if (!visited.has(value)) ans.push(...this.DFSUtil(value, visited));
      }
    } else {
      ans.push(...this.DFSUtil(src, visited));
    }
    return ans;
  }

  public BFS(src: T, coverAll: boolean): T[] {
    return [];
  }

  private hasCycleDirected(): boolean {
    return false;
  }

  private hasCycleUndirected(): boolean {
    return false;
  }

  public hasCycle() {
    return this.isDirected
      ? this.hasCycleDirected()
      : this.hasCycleUndirected();
  }

  public clear() {
    this.map = new Map<T, Set<T>>();
  }
}
