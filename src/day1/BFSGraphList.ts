// declare type GraphEdge = { to: number; weight: number };

export default function bfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    // const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    // seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;

        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; ++i) {
            // already seen vertex
            const nextVertex = adjs[i].to
            if (prev[nextVertex] > -1 || prev[nextVertex] === source) {
                continue;
            }

            // seen[i] = true;
            prev[nextVertex] = curr;
            q.push(nextVertex);
        }
        // seen[curr] = true;
    } while (q.length);

    // build the prev backwards to a complete path

    if (prev[needle] === -1) {
        return null;
    }

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
